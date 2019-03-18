import Broker from './Broker'

class Publisher { }

Publisher.publish = function ({ topic, data }) {
    Broker.prototype.publish(topic, data);
}

export default Publisher;
