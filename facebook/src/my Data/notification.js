import NotificationThumb1 from '../asssets/Notification/notificationthumb1.jpg'
import NotificationThumb2 from '../asssets/Notification/notificationthumb2.jpg'
import NotificationThumb3 from '../asssets/Notification/notificationthumb3.jpg'
import NotificationThumb4 from '../asssets/Notification/notificationthumb4.jpg'
import loveIcon from '../asssets/likesicon/loveIcon.svg'
const notifications = [
    {
      id: 1,
      name: 'Sanjeet Chaudhary',
      notificationThumb: NotificationThumb1,
      action: 'invited you to like',
      entity: 'Taaj Palace Banquet',
      time: '9 hours ago',
      iconStyle: {
        height: '28px',
        width: '28px',
        backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/9RLwYBQ66u8.png)',
        backgroundPosition: '0px -319px',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        display: 'inline-block'
      },
    },
    {
        id: 2,
        name: 'Okil K. Bohara',
        notificationThumb: NotificationThumb2,
        action: 'invited you to like',
        entity: 'Dear Combrades',
        time: 'a day ago',
        iconStyle: {
            height: '28px',
            width: '28px',
            backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/9RLwYBQ66u8.png)',
            backgroundPosition: '0px -319px',
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            display: 'inline-block'
          },
      },
      {
        id: 3,
        name: 'NJr Harish',
        notificationThumb: NotificationThumb3,
        action: 'mentioned you in a comment',
        time: '3 days ago',
        iconStyle: {
            height: '28px',
            width: '28px',
            backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/9RLwYBQ66u8.png)',
            backgroundPosition: '0px -986px',
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            display: 'inline-block'
          },
      },
      {
        id: 4,
        name: 'Sushmita Chy',
        notificationThumb: NotificationThumb4,
        action: ' reacted to your comment: "Happy birthday Arman Dahit  ',
        time: '3 days ago',
        iconStyle: {
            height: '28px',
            width: '28px',
            backgroundImage: `url(${loveIcon})`,
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            display: 'inline-block'
          },
      },
      {
        id: 5,
        name: 'Okil K. Bohara',
        notificationThumb: NotificationThumb2,
        action: 'invited you to like',
        entity: 'Dear Combrades',
        time: 'a day ago',
        iconStyle: {
            height: '28px',
            width: '28px',
            backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/9RLwYBQ66u8.png)',
            backgroundPosition: '0px -319px',
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            display: 'inline-block'
          },
      },
      {
        id: 7,
        name: 'Sushmita Chy',
        notificationThumb: NotificationThumb4,
        action: ' reacted to your comment: "Happy birthday Arman Dahit  ',
        time: '3 days ago',
        iconStyle: {
            height: '28px',
            width: '28px',
            backgroundImage: `url(${loveIcon})`,
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            display: 'inline-block'
          },
      },
    // Add more notification objects as needed
  ];
  
  export default notifications;