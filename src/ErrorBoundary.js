import React from 'react';

class ErrorBoudnary extends React.Component {
   state = { error: null };

   static getDrivedStateFromError(error) {
      return { error };
   }

   componentDidCatch(error, errorInfo) {
      console.group('componentDidcatch');
      console.log(error);
      console.log(errorInfo);
      console.groupEnd();
   }

   render() {
      const { error } = this.state;
      if (error !== null) {
         return (
            <div>
               <h2>Somehting went wrong!</h2>
               <div>{error.toString()}</div>
            </div>
         );
      } else {
         return this.props.children;
      }
   }
}

export default ErrorBoudnary;
