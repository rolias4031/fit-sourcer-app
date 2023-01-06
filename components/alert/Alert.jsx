import React from 'react';
import PropTypes from 'prop-types';
import AlertMessage from './AlertMessage';

function Alert({ alerts, onReset }) {
  console.log(alerts);
  let alertsContent = null;
  if (alerts.length > 0) {
    const alertMessages = alerts.map((alert) => (
      <AlertMessage key={`${alert.message}-${alert.timeStamp}`} alert={alert} onReset={onReset}/>
    ));
    alertsContent = <div>{alertMessages}</div>;
  }

  return alertsContent;
}

Alert.propTypes = {
  alerts: PropTypes.arrayOf(
    PropTypes.exact({
      message: PropTypes.string,
      timeStamp: PropTypes.number,
      isError: PropTypes.bool,
    }),
  ),
};

Alert.defaultProps = {
  alerts: [],
};

export default Alert;
