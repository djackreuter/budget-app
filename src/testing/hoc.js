import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>Admin info only</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuth = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login</p>
        )}
    </div>
  );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="details" />, document.getElementById('app'));