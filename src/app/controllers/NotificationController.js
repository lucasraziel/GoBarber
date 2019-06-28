import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
  async index(request, response) {
    const checkUserProvider = await User.findOne({
      where: { id: request.userId, provider: true },
    });

    if (!checkUserProvider) {
      return response.status(401).json({ error: 'User is not a provider' });
    }

    const notifications = await Notification.find({
      user: request.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return response.json(notifications);
  }

  async update(request, response) {
    const { id } = request.params;
    console.log(id);

    const notification = await Notification.findByIdAndUpdate(
      id,
      { read: true },
      { new: true }
    );
    console.log(notification);

    return response.json(notification);
  }
}

export default new NotificationController();
