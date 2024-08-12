//firebase Messaging Service Worker 

self.addEventListener("push", (event)=>{
    const notif = event.data.json().notification;
    
  event.waitUntil(self.registration.showNotification(notif.title, {
        body:notif.body,
        icon:notif.icon,
        data: {
        url: notif.click_action 
        }
        }));
});

self.addEventListener("notificacionclick", (event) =>{
    event.waitUntil(clients.openWindow(event.notification.data.url));
})