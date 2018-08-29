import React from 'react';

const EditExpensePage = (props) => {
  return (
    <div>
      edit expense page with id {props.match.params.id}
    </div>
  );
};

export default EditExpensePage;