import { loadComponent } from './js/loader';

import './styles/main.css';

await loadComponent("#header", "/src/components/header.html");
await loadComponent("#hero", "/src/components/hero.html");
await loadComponent("#services", "/src/components/services.html");
await loadComponent("#about", "/src/components/about.html");
await loadComponent("#advantages", "/src/components/advantages.html");
await loadComponent("#cta", "/src/components/cta.html");
await loadComponent("#footer", "/src/components/footer.html");

lucide.createIcons()