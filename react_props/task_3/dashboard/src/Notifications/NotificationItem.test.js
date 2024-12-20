import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct HTML based on the `type` and `value` props', () => {
    for (const typeProp of ['default', 'urgent', '???']) {
      for (const valueProp of ['test', '???']) {
        const wrapper = shallow(<NotificationItem type={typeProp} value={valueProp} />);
        expect(wrapper.html()).toBe(`<li data-notification-type="${typeProp}">${valueProp}</li>`);
      }
    }
  });

  it('renders correct HTML based on the `html` prop', () => {
    let wrapper;

    wrapper = shallow(<NotificationItem html={{__html: "<strong>urgent</strong>"}} />);
    expect(wrapper.html()).toBe('<li><strong>urgent</strong></li>');

    wrapper = shallow(<NotificationItem value="a" html={{__html: "b"}} />);
    expect(wrapper.html()).toBe('<li>b</li>');

    wrapper = shallow(<NotificationItem html={{__html: "???"}} />);
    expect(wrapper.html()).toBe('<li>???</li>');

    wrapper = shallow(<NotificationItem />);
    expect(wrapper.html()).toBe('<li></li>');
  });
});
