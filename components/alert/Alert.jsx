import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AlertMessage from './AlertMessage';

function Alert({ alerts, onReset }) {
  let alertsContent = <div>hi</div>;
  if (alerts.length > 0) {
    const alertMessages = alerts.map((alert) => (
      <AlertMessage key={`${alert.message}-${alert.timeStamp}`} alert={alert} onReset={onReset}/>
    ));
    alertsContent = <div>{alertMessages}hi</div>;
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
