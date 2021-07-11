
import { Component } from "react";

interface IState {
  hasError: boolean;
}
class MarkdownPreviewErr extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error: any, info: any) {
   console.error(error);
   console.info(info) 
  }
  
  render() {
    if (this.state.hasError) {
      return "Error rendering markdown";
    }

    return this.props.children;
  }
}

export default MarkdownPreviewErr;
