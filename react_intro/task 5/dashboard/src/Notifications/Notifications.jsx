import React from 'react';
import './Notifications.css';
import closeButton from './assets/close-button.png';
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
  function closeButtonClicked() {
    console.log('Close button has been clicked');
  }

  return (
    <div className="notifications">
      <button onClick={closeButtonClicked} style={{
        marginTop: 10,
        marginRight: 5,
        float: 'right',
        border: 'none',
        backgroundColor: 'transparent'
      }} aria-label="Close">
        <img style={{width: 10}} src={closeButton} alt=""/>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification() }}/>
      </ul>
    </div>
  );
}