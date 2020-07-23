import React, { Suspense } from 'react';

function LazyLoad(WrappedComponent) {
  return class extends React.Component {
    render() {
      const self = this;
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <WrappedComponent {...self.props} />
        </Suspense>
      );
    }
  };
}

export default LazyLoad;
