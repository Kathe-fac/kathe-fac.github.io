// js/main.js
import { perfilData, cursosData, companerosData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // Renderizar Encabezado y Perfil
    const header = document.querySelector('header');
    document.getElementById('header-nombre').textContent = perfilData.nombre;
    document.getElementById('header-titulo').textContent = perfilData.titulo;
    document.getElementById('header-linkedin').href = perfilData.linkedin;
    // Set banner background and avatar image
    if (perfilData.banner) {
        header.style.backgroundImage = `linear-gradient(rgba(99,102,241,0.45), rgba(167,139,250,0.22)), url('${perfilData.banner}')`;
    }
    const avatarEl = document.getElementById('hero-avatar');
    if (avatarEl && perfilData.avatar) {
        avatarEl.src = perfilData.avatar;
        avatarEl.alt = perfilData.nombre + ' - Foto de perfil';
    }
    document.getElementById('desc-1').textContent = perfilData.descripcion1;
    document.getElementById('desc-2').textContent = perfilData.descripcion2;

    // Renderizar Cursos
    const cursosContainer = document.getElementById('cursos-container');
    cursosData.forEach(curso => {
        cursosContainer.innerHTML += `
            <div class="card">
                <div>
                    <h3>${curso.nombre}</h3>
                    <p><strong>Enfoque:</strong> ${curso.enfoque}</p>
                    <p><strong>Profesor:</strong> ${curso.prof}</p>
                </div>
                <div class="card-links">
                    <a href="${curso.urlCurso}" target="_blank">Página del Curso ↗</a>
                    <a href="${curso.urlIn}" target="_blank">LinkedIn del Profesor ↗</a>
                </div>
            </div>
        `;
    });

    // Renderizar Compañeros
    const companerosList = document.getElementById('companeros-list');
    companerosData.forEach(comp => {
        companerosList.innerHTML += `
            <li>
                <strong>${comp.nombre}</strong> <small>(${comp.desc})</small> - 
                <a href="${comp.urlWeb}" target="_blank">Sitio Web</a> | 
                <a href="${comp.urlIn}" target="_blank">LinkedIn</a>
            </li>
        `;
    });
});