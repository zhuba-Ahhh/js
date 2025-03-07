/**
 * 微前端架构实现
 *
 * 实现一个基础的微前端框架，支持：
 * 1. 基座应用加载和管理子应用
 * 2. 子应用独立部署和运行时隔离
 * 3. 应用间通信机制
 */

// 子应用接口定义
interface MicroApp {
  name: string;
  entry: string;
  container: string;
  activeRule: string | ((location: Location) => boolean);
}

// 生命周期钩子
interface LifeCycles {
  beforeLoad?: () => Promise<void>;
  mounted?: () => Promise<void>;
  unmounted?: () => Promise<void>;
}

// 微前端框架核心类
class MicroFrontend {
  private apps: MicroApp[] = [];
  private activeApp: MicroApp | null = null;

  // 注册子应用
  registerApp(app: MicroApp, lifeCycles?: LifeCycles) {
    this.apps.push(app);
    this.handleRouteChange();
  }

  // 加载子应用
  private async loadApp(app: MicroApp) {
    if (this.activeApp?.name === app.name) return;

    // 卸载当前应用
    if (this.activeApp) {
      await this.unmountApp(this.activeApp);
    }

    // 加载新应用
    const container = document.querySelector(app.container);
    if (!container) throw new Error(`Container ${app.container} not found`);

    // 加载子应用资源
    await this.loadAppResources(app.entry);

    // 渲染子应用
    await this.mountApp(app);
    this.activeApp = app;
  }

  // 加载子应用资源
  private async loadAppResources(entry: string): Promise<void> {
    try {
      const response = await fetch(entry);
      const html = await response.text();

      // 解析和加载JS、CSS资源
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // 加载脚本
      const scripts = Array.from(doc.getElementsByTagName('script'));
      await Promise.all(
        scripts.map(script => {
          return new Promise((resolve, reject) => {
            const newScript = document.createElement('script');
            newScript.src = script.src;
            newScript.onload = resolve;
            newScript.onerror = reject;
            document.head.appendChild(newScript);
          });
        })
      );

      // 加载样式
      const styles = Array.from(doc.getElementsByTagName('link'));
      styles.forEach(style => {
        if (style.rel === 'stylesheet') {
          const newStyle = document.createElement('link');
          newStyle.rel = 'stylesheet';
          newStyle.href = style.href;
          document.head.appendChild(newStyle);
        }
      });
    } catch (error) {
      console.error('Failed to load app resources:', error);
      throw error;
    }
  }

  // 挂载子应用
  private async mountApp(app: MicroApp): Promise<void> {
    // 实现应用挂载逻辑
    const container = document.querySelector(app.container);
    if (!container) return;

    // 调用子应用的mount生命周期
    if ((window as any)[`${app.name}Mount`]) {
      await (window as any)[`${app.name}Mount`](container);
    }
  }

  // 卸载子应用
  private async unmountApp(app: MicroApp): Promise<void> {
    // 实现应用卸载逻辑
    const container = document.querySelector(app.container);
    if (!container) return;

    // 调用子应用的unmount生命周期
    if ((window as any)[`${app.name}Unmount`]) {
      await (window as any)[`${app.name}Unmount`]();
    }

    container.innerHTML = '';
  }

  // 路由变化处理
  private handleRouteChange() {
    const matchedApp = this.apps.find(app => {
      return typeof app.activeRule === 'function'
        ? app.activeRule(window.location)
        : window.location.pathname.startsWith(app.activeRule);
    });

    if (matchedApp) {
      this.loadApp(matchedApp);
    }
  }

  // 启动微前端框架
  start() {
    window.addEventListener('popstate', () => this.handleRouteChange());
    this.handleRouteChange();
  }
}

export default MicroFrontend;
