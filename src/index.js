import { Dashboard } from "./layout/dashboard";

const app = document.querySelector('#app');
let dashboard = new Dashboard();
app.appendChild(dashboard.getNode());