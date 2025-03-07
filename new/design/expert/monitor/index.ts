/**
 * 前端监控系统实现
 *
 * 实现一个完整的前端监控系统，支持：
 * 1. 错误监控：JS错误、Promise异常、资源加载错误
 * 2. 性能监控：页面加载性能、资源性能、接口性能
 * 3. 行为监控：PV/UV、用户行为轨迹、性能指标
 */

// 监控配置接口
interface MonitorConfig {
  pid: string; // 项目标识
  uid?: string; // 用户标识
  env: 'development' | 'production'; // 环境
  sample: number; // 采样率 0-1
}

// 错误信息接口
interface ErrorInfo {
  type: 'js' | 'promise' | 'resource';
  message: string;
  stack?: string;
  filename?: string;
  position?: string;
  timestamp: number;
}

// 性能指标接口
interface PerformanceInfo {
  type: 'navigation' | 'resource' | 'api';
  name: string;
  duration: number;
  startTime: number;
  protocol?: string;
  size?: number;
}

// 用户行为接口
interface BehaviorInfo {
  type: 'pv' | 'click' | 'scroll' | 'api';
  page: string;
  timestamp: number;
  data: Record<string, any>;
}

class Monitor {
  private config: MonitorConfig;
  private queue: Array<ErrorInfo | PerformanceInfo | BehaviorInfo> = [];
  private timer: NodeJS.Timeout | null = null;

  constructor(config: MonitorConfig) {
    this.config = config;
    this.init();
  }

  private init() {
    // 初始化错误监控
    this.initErrorMonitor();
    // 初始化性能监控
    this.initPerformanceMonitor();
    // 初始化行为监控
    this.initBehaviorMonitor();
    // 初始化上报机制
    this.initReporter();
  }

  // 初始化错误监控
  private initErrorMonitor() {
    // 监听JS错误
    window.addEventListener(
      'error',
      event => {
        if (event.error) {
          this.reportError({
            type: 'js',
            message: event.error.message,
            stack: event.error.stack,
            filename: event.filename,
            position: `${event.lineno}:${event.colno}`,
            timestamp: Date.now(),
          });
        }
      },
      true
    );

    // 监听Promise异常
    window.addEventListener('unhandledrejection', event => {
      this.reportError({
        type: 'promise',
        message: event.reason?.message || String(event.reason),
        stack: event.reason?.stack,
        timestamp: Date.now(),
      });
    });
  }

  // 初始化性能监控
  private initPerformanceMonitor() {
    // 监听页面加载性能
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType(
          'navigation'
        )[0] as PerformanceNavigationTiming;
        this.reportPerformance({
          type: 'navigation',
          name: document.title,
          duration: navigation.loadEventEnd - navigation.startTime,
          startTime: navigation.startTime,
        });
      }, 0);
    });

    // 监听资源加载性能
    const observer = new PerformanceObserver(list => {
      list.getEntries().forEach(entry => {
        if (entry.entryType === 'resource') {
          this.reportPerformance({
            type: 'resource',
            name: entry.name,
            duration: entry.duration,
            startTime: entry.startTime,
            protocol: (entry as PerformanceResourceTiming).nextHopProtocol,
            size: (entry as PerformanceResourceTiming).encodedBodySize,
          });
        }
      });
    });
    observer.observe({ entryTypes: ['resource'] });
  }

  // 初始化行为监控
  private initBehaviorMonitor() {
    // 监听页面访问
    this.reportBehavior({
      type: 'pv',
      page: location.href,
      timestamp: Date.now(),
      data: {
        title: document.title,
        referrer: document.referrer,
      },
    });

    // 监听点击事件
    document.addEventListener(
      'click',
      event => {
        const target = event.target as HTMLElement;
        this.reportBehavior({
          type: 'click',
          page: location.href,
          timestamp: Date.now(),
          data: {
            tag: target.tagName.toLowerCase(),
            id: target.id,
            className: target.className,
            text: target.textContent?.slice(0, 50),
          },
        });
      },
      true
    );
  }

  // 初始化上报机制
  private initReporter() {
    // 使用 requestIdleCallback 在空闲时上报
    const report = () => {
      if (this.queue.length === 0) return;

      const data = this.queue.splice(0, 10); // 每次最多上报10条
      // 实际项目中这里应该调用API上报到服务器
      console.log('上报数据:', data);
    };

    // 定时上报
    this.timer = setInterval(() => {
      if (typeof requestIdleCallback === 'function') {
        requestIdleCallback(() => report());
      } else {
        report();
      }
    }, 5000); // 每5秒检查一次
  }

  // 上报错误信息
  private reportError(error: ErrorInfo) {
    if (Math.random() > this.config.sample) return; // 采样
    this.queue.push(error);
  }

  // 上报性能信息
  private reportPerformance(performance: PerformanceInfo) {
    if (Math.random() > this.config.sample) return; // 采样
    this.queue.push(performance);
  }

  // 上报行为信息
  private reportBehavior(behavior: BehaviorInfo) {
    if (Math.random() > this.config.sample) return; // 采样
    this.queue.push(behavior);
  }

  // 手动上报
  report(data: ErrorInfo | PerformanceInfo | BehaviorInfo) {
    this.queue.push(data);
  }

  // 销毁监控实例
  destroy() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}

export default Monitor;
