/**
 * 低代码平台实现
 *
 * 实现一个基础的低代码平台，支持：
 * 1. 可视化搭建：拖拽布局、属性配置、样式设置
 * 2. 组件系统：组件注册、组件通信、组件状态管理
 * 3. 动态渲染：JSON Schema解析、实时预览、代码生成
 */

// 组件接口定义
interface Component {
  id: string;
  type: string;
  props: Record<string, any>;
  children?: Component[];
  style?: Record<string, string | number>;
}

// 组件配置接口
interface ComponentConfig {
  name: string;
  label: string;
  props: PropConfig[];
  defaultProps?: Record<string, any>;
  category: string;
}

// 属性配置接口
interface PropConfig {
  name: string;
  label: string;
  type: 'string' | 'number' | 'boolean' | 'select' | 'color';
  defaultValue?: any;
  options?: Array<{ label: string; value: any }>;
}

// 页面配置接口
interface PageConfig {
  components: Component[];
  style?: Record<string, string>;
  scripts?: string[];
}

class LowCodePlatform {
  private components: Map<string, ComponentConfig> = new Map();
  private currentPage: PageConfig = { components: [] };

  // 注册组件
  registerComponent(config: ComponentConfig) {
    this.components.set(config.name, config);
  }

  // 添加组件到页面
  addComponent(component: Component, parentId?: string) {
    if (!parentId) {
      this.currentPage.components.push(component);
      return;
    }

    const addToParent = (components: Component[]) => {
      for (const comp of components) {
        if (comp.id === parentId) {
          comp.children = comp.children || [];
          comp.children.push(component);
          return true;
        }
        if (comp.children && addToParent(comp.children)) {
          return true;
        }
      }
      return false;
    };

    addToParent(this.currentPage.components);
  }

  // 更新组件属性
  updateComponent(id: string, updates: Partial<Component>) {
    const updateInTree = (components: Component[]) => {
      for (const comp of components) {
        if (comp.id === id) {
          Object.assign(comp, updates);
          return true;
        }
        if (comp.children && updateInTree(comp.children)) {
          return true;
        }
      }
      return false;
    };

    updateInTree(this.currentPage.components);
  }

  // 移除组件
  removeComponent(id: string) {
    const removeFromTree = (components: Component[]) => {
      const index = components.findIndex(comp => comp.id === id);
      if (index !== -1) {
        components.splice(index, 1);
        return true;
      }

      for (const comp of components) {
        if (comp.children && removeFromTree(comp.children)) {
          return true;
        }
      }
      return false;
    };

    removeFromTree(this.currentPage.components);
  }

  // 生成页面代码
  generateCode(): string {
    const generateComponentCode = (component: Component): string => {
      const config = this.components.get(component.type);
      if (!config) return '';

      const propsStr = Object.entries(component.props)
        .map(([key, value]) => `${key}={${JSON.stringify(value)}}`)
        .join(' ');

      const styleStr = component.style
        ? ` style={${JSON.stringify(component.style)}}`
        : '';

      const childrenCode = component.children
        ? component.children
            .map(child => generateComponentCode(child))
            .join('\n')
        : '';

      return `<${config.name} ${propsStr}${styleStr}>
${childrenCode}
</${config.name}>`;
    };

    const componentsCode = this.currentPage.components
      .map(comp => generateComponentCode(comp))
      .join('\n');

    return `
import React from 'react';
${Array.from(this.components.values())
  .map(config => `import ${config.name} from './components/${config.name}';`)
  .join('\n')}

export default function Page() {
  return (
    <div className="page">
      ${componentsCode}
    </div>
  );
}
`;
  }

  // 导出页面配置
  exportConfig(): PageConfig {
    return JSON.parse(JSON.stringify(this.currentPage));
  }

  // 导入页面配置
  importConfig(config: PageConfig) {
    this.currentPage = JSON.parse(JSON.stringify(config));
  }

  // 获取组件配置
  getComponentConfig(type: string): ComponentConfig | undefined {
    return this.components.get(type);
  }

  // 获取所有组件配置
  getAllComponentConfigs(): ComponentConfig[] {
    return Array.from(this.components.values());
  }
}

export default LowCodePlatform;
