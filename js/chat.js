// export class chat extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: "open" });
//   }
//     connectedCallback() {
//         this.shadowRoot.innerHTML = `
//         <link rel="stylesheet" href="/css/chat.css">
//         <chat>
//         <div class="page-container">
//         <div class="content">
//           <h1 id="room-header" class ="room-header"> </h1>
//           <div class="chats-container" id ="chat-container">
//             {% for message in messages %} {% if message.sender.lower == user.lower %}
//             <div class="single-message sent">
//               <p class="msg-body">{{ message.message }}</p>
//               <span class="sender">Me</span>
//             </div>
//             {% else %}
//             <div class="single-message received">
//               <p class="msg-body">{{ message.message }}</p>
//               <span class="sender">{{ message.sender }}</span>  
//             </div>
//             {% endif %}
//             {% endfor %}
//           </div>
//           <form action = "" id = "msg-form" method="post">
//             {% csrf_token %}
//             <input id = "messageInput" type="text" placeholder="Type a message" />
//             <button type="submit">➤</button>
//           </form>
//         </div>
//       </div>
//         </chat>
//         `
//   };
// }

// function h() {
//   console.log("doopha");
// }
