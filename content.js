// List of fake urgency keywords
const fakeUrgencyKeywords = [
    "Limited time offer",
    "Hurry, offer ends soon",
    "Last chance to buy",
    "Act now, don't miss out",
    "Final hours",
    "Ending soon",
    "Only a few left",
    "Grab it before it's gone",
    "Sale ends today",
    "Flash sale",
    "Deal of the day",
    "Exclusive offer",
    "Get it before it's too late",
    "Don't wait, shop now",
    "Limited stock available",
    "Ends in",
    "Order within"
  ];
  
//   // Function to highlight areas containing fake urgency keywords
//   function highlightFakeUrgencyAreas() {
//     const bodyText = document.body.innerHTML;
//     fakeUrgencyKeywords.forEach(keyword => {
//       const re = new RegExp(keyword, "gi");
//       const matches = bodyText.matchAll(re);
//       for (const match of matches) {
//         const node = document.evaluate('//*[text()[contains(., "' + match[0] + '")]]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//         if (node) {
//           const span = document.createElement("span");
//           span.style.backgroundColor = "yellow";
//           const textNode = document.createTextNode(match[0]);
//           span.appendChild(textNode);
//           node.parentNode.replaceChild(span, node);
//         //   alert("don't order too soon.....its just a fake urgency")
//         }
//       }
//       if (matches.length > 0) {
//         alert(`Fake urgency keyword found: "${keyword}"`);
//       }
//     });
//   }
  
//   // Call the function to highlight and alert about fake urgency areas
//   highlightFakeUrgencyAreas();
  
// Function to highlight areas containing fake urgency keywords and put a border around the closest parent div
function highlightFakeUrgencyAreas() {
    const bodyText = document.body.innerHTML;
    fakeUrgencyKeywords.forEach(keyword => {
      const re = new RegExp(keyword, "gi");
      const matches = bodyText.matchAll(re);
      for (const match of matches) {
        const node = document.evaluate('//*[text()[contains(., "' + match[0] + '")]]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (node) {
          const closestDiv = node.closest('div');
          if (closestDiv) {
            closestDiv.style.border = "2px solid red"; // Add border to the closest div
            const span = document.createElement("span");
            closestDiv.style.backgroundColor = "yellow";
            closestDiv.style.boxShadow = "0 0 5px red"; // Add red box shadow
            closestDiv.setAttribute("title", "Fake urgency" ); // Add tooltip
            // const span = document.createElement("span");
            // span.style.backgroundColor = "yellow";
            const textNode = document.createTextNode(match[0]);
            span.appendChild(textNode);
            node.parentNode.replaceChild(span, node);
          }
        }
      }
      if (matches.length > 0) {
        alert(`Fake urgency keyword found: "${keyword}"`);
      }
    });
  }
  
  // Call the function to highlight and alert about fake urgency areas
  highlightFakeUrgencyAreas();
  