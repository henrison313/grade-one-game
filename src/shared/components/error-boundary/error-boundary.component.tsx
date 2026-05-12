import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * 错误边界组件
 * 捕获子组件树中的 JavaScript 错误，显示降级 UI
 */
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleClearStorage = () => {
    try {
      localStorage.clear();
      window.location.reload();
    } catch (e) {
      console.error('Failed to clear storage:', e);
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '20px',
          fontFamily: 'sans-serif',
          background: '#1a1a2e',
          color: '#fff',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}>
          <h1 style={{ color: '#ff6b6b', marginBottom: '20px' }}>
            😅 出错了
          </h1>
          <p style={{ marginBottom: '20px', opacity: 0.8 }}>
            页面遇到了问题，请尝试刷新
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px',
            maxWidth: '90%',
            overflow: 'auto',
            fontSize: '12px',
            textAlign: 'left',
          }}>
            <details>
              <summary style={{ cursor: 'pointer', marginBottom: '10px' }}>
                查看错误详情
              </summary>
              <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                {this.state.error?.toString()}
                {'\n\n'}
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={this.handleReload}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                background: '#667eea',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              刷新页面
            </button>
            <button
              onClick={this.handleClearStorage}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                background: '#ff6b6b',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              清除数据并刷新
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
