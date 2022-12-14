import React from 'react';
import Alert from 'react-bootstrap/Alert';

export default function LoadingBox(props) {
  return (
    <div>
      <Alert key={props.variant} variant={props.variant || 'info'}>
        {props.children}
      </Alert>
    </div>
  );
}
