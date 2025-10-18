HNG 13 Stage 0 Task: Profile Card

A responsive and accessible **Profile Card** built with **HTML**, **CSS**, and **JavaScript (Vanilla)** as part of the **Frontend Wizards Stage 0 Challenge**.  
Every visible element includes `data-testid` attributes for automated testing.


 Live Demo
[🔗 View Live Project](https://hng13-profile-cardd.vercel.app/)  
[💻 GitHub Repository](https://emmyanzo.github.io/hng13-profile-cardd/)


Task Overview

Build a small, semantic, testable profile card that includes:
- User name  
- Short biography  
- Current time (in milliseconds)  
- Avatar image  
- Social links list  
- Hobbies list  
- Dislikes list  

All elements must include specific `data-testid` attributes for test stability.



Tech Stack
- **HTML** — Semantic structure  
- **CSS3** — Responsive layout (Flexbox/Grid)  
- **JavaScript (ES6)** — Dynamic rendering (e.g., time in milliseconds)

---

 Core Requirements

| Element | data-testid | Description |
|----------|--------------|-------------|
| Profile card root | `test-profile-card` | Main container |
| Name | `test-user-name` | Displays user’s name |
| Bio | `test-user-bio` | Short biography paragraph |
| Time | `test-user-time` | Shows `Date.now()` in ms |
| Avatar | `test-user-avatar` | User photo with alt text |
| Social links | `test-user-social-links` | Container for social icons |
| Hobbies | `test-user-hobbies` | List of hobbies |
| Dislikes | `test-user-dislikes` | List of dislikes |

---

 Accessibility & Semantics

- Uses **semantic HTML tags** (`<article>`, `<header>`, `<figure>`, `<nav>`, `<section>`, `<ul>`, `<li>`).  
- Avatar includes **alt text**.  
- Links are **keyboard-focusable** and have visible **focus styles**.  
- Social links open in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.


 Responsiveness

- Works smoothly on **mobile**, **tablet**, and **desktop**.  
- Layout stacks vertically on small screens and arranges horizontally on larger ones.  
- Text wraps gracefully and doesn’t break layout when resized.



