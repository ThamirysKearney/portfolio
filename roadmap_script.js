
// Data
const bootcampData = {
    title: "Bootcamp Análisis de Datos",
    weeks: 18,
    modules: [
        { name: "Módulo 1", start: 1, end: 4 }, 
        { name: "Módulo 2", start: 5, end: 9 }, 
        { name: "Módulo 3", start: 10, end: 14 }, 
        { name: "End", start: 15, end: 18 }, 
    ],
    stack: [
        {
            type: "Competencia",
            name: "configurar y automatizar su entorno de trabajo.",
            start: 1,
            end: 18,
        },
        {
            type: "Competencia",
            name: "Gestionar equipos técnicos.",
            start: 1,
            end: 18,
        },
        {
            type: "Competencia",
            name: "Evaluar Conjuntos de datos",
            start: 1,
            end: 18,
        },
        {
            type: "Competencia",
            name: "Desarrollar interfaces dinámicas",
            start: 1,
            end: 18,
        },
        {
            type: "Competencia",
            name: "Ser capaz de desarrollar un programa en Python",
            start: 1,
            end: 18,
        },
         {
            type: "Course",
            name: "<a href='https://www.netacad.com/courses/python-essentials-1?courseLang=en-US'>Curso de Python</a>",
            start: 1,
            end: 4,
        }, 
        {
            type: "Proyecto",
            name: "Analisis descriptivo con Excel | <i class='bi bi-person-fill'></i>",
            start: 1,
            end: 2,
        },
        {
            type: "Proyecto",
            name: "Desarrollo de un programa en python | <i class='bi bi-people-fill'></i>",
            start: 3,
            end: 3,
        },
{
            type: "Proyecto",
            name: "Base de datos Analitica SQL | <i class='bi bi-person-fill'></i>",
            start: 4,
            end: 4,
        },
        {
            type: "Competencia",
            name: "Diseñar y gestionar bases de datos",
            start: 5,
            end: 18,
        },
    
        {
            type: "Competencia",
            name: "Desplegar aplicaciones",
            start: 5,
            end: 18,
        },
     ,
              {
            type: "Course",
            name: "<a href='https://learn.microsoft.com/es-es/credentials/certifications/data-analyst-associate/?practice-assessment-type=certification&source=learn'>Curso Microsoft Learn Analista de Datos</a>",
            start: 5,
            end: 9,
        },
       {
            type: "Proyecto",
            name: "ETL con Python | <i class='bi bi-people-fill'></i>",
            start: 5,
            end: 5,
        },
         {
            type: "Proyecto",
            name: "Análisis estadistico y prueba de hipotesis (EDA) | <i class='bi bi-person-fill'></i>",
            start: 6,
            end: 7,
        },
        {
            type: "Proyecto",
            name: "Análisis con Herramientas de BI | <i class='bi bi-person-fill'></i>",
            start: 8,
            end: 9,
        },
        {
            type: "Competencia",
            name: "Aplicar algoritmos de aprendizaje automático",
            start: 10,
            end: 18,
        },
         {
            type: "Competencia",
            name: "Optimizar parámetros de IA",
            start: 10,
            end: 18,
        },
        {
            type: "Course",
            name: "<a href='https://ti.to/saturdaysai/data-science-fundamentals/'>Curso de Machine Learning enfocado en Data Science</a>",
            start: 10,
            end: 14,
        },
        {
            type: "Proyecto",
            name: "Problema de Aprendizaje no Supervisado | <i class='bi bi-person-fill'></i>",
            start: 10,
            end: 10,
        },
        {
            type: "Proyecto",
            name: "Problema de clasificación | <i class='bi bi-person-fill'></i>",
            start: 11,
            end: 12,
        },
        {
            type: "Proyecto",
            name: "Problema de Regresión | <i class='bi bi-person-fill'></i>",
            start: 13,
            end: 13,
        },
         {
            type: "Proyecto",
            name: "Forcasting con Series Temporales | <i class='bi bi-person-fill'></i>",
            start: 14,
            end: 14,
        },
        {
            type: "Proyecto",
            name: "Proyectos Finales | <i class='bi bi-people-fill'></i>",
            start: 15,
            end: 18,
        },
    ],
    links:  {
        //googleCalendar: "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FMadrid&src=Y18zMDQ4MjU4NDYxYWE5MTk2YzE3YjgyNDc4OTk5NDk2MzNjNzMzZDk4MzhlZjFhZTQ1YzMzZTQ5ZDRkZGU5ZGZmQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%234285F4",
        zoom: "https://zoom.us/j/97768164423?pwd=PJYf5SmJD0ydDyDayWukbZKAAfVFMS.1",
        classroom: "https://classroom.google.com/c/ODIxOTk1MzQ4OTA3?cjc=zwkduqgr",
        discord: "https://discord.gg/XnpRH98A",
        github: "https://github.com/Factoria-F5-dev"
    },
    competencies: [
        {
            name: "Configura y automatiza su entorno de trabajo",
            indicator: {
                typeBasic: [
                    "Uso de github, gitlab o bitbucket", 
                    "Conectar repo local al remoto", 
                    "Uso de Gitflow methodology",
                    "Uso de Commits descriptivos",
                    "Uso apropiado de ramas",
                    "Uso de Nomenclatura en commits",
                    "Uso de Nomenclatura en ramas",
                ],
                typeExtra: [
                    "Integración de github actions CI/CD", 
                    "Uso de SonarQube, ESLint",
                    "Uso de Dependabot",
                ]
            },
            themes: {
                typeBasic: [
                    "Sistemas operativos (Windows, Linux, Mac)",
                    "Terminal Unix/linux básico (navegación, manipulación de archivos y permisos)",
                    "Git vs github",
                    "Gitflow",
                ],
                typeExtra: [
                    "Git actions CI/CD",
                    "Monitoreo de código y calidad con herramientas de integración continua (SonarQube, ESLint)",
                    "Manejo de versiones de dependencias con herramientas como Dependabot",
                    "Manejo de logs",
                ]
            }
        },
        {
            name: "Gestionar equipos técnicos",
            metric: ["Planificación y gestión del proyecto"],
            indicator: {
                typeBasic: [
                    "Uso de roles Definidos", 
                    "Uso de kanban / burndown chart", 
                    "Uso de sprint backlog",
                    "Uso de herramientas de gestión de proyectos (Trello, Jira, etc.)",
                    "Uso de estimación de tareas",
                    "Uso de Actas de reuniones",
                    "Uso de Daily",
                    "Uso de Retros",
                    "Prioriza al equipo",
                    "Uso de Historias de usuario",
                    "Uso de Workflow diagram",
                    "Uso de Documentación (README) o celdas MD en notebook",
                ],
                typeExtra:[
                    "Integración de Gitflow con herramientas de gestión de proyectos (Jira y Trello)",
                ]
            },
            themes: {
                typeBasic: [
                    "Metodología Scrum y kanban (roles y ceremonias)", 
                ],
                typeExtra: [
                    "Integración de Gitflow con herramientas de gestión de proyectos (Jira y Trello)",
                    "Herramientas de gestión de proyectos (Trello & Jira), actas de reuniones e historias de usuario",
                    "Documentación; archivos md (README), Workflow diagram, etc.",

                ]
            }
        },
         {
            name: "Evaluar conjuntos de datos",
            indicator: {
                typeBasic: [
                    "Uso y gestión de formato .csv",
                    "Limpieza y preprocesado de datos",
                    "Visualización de datos (seaborn, matplotlib, plotly)",
                    "Análisis exploratorio detallado (EDA)",
                    "Uso de librerías que permitan el desarrollo de paneles de visualización de datos (dash, streamlit, gradio)",
                    "Uso de técnicas de preprocesado  (normalización, escalado, label encoder, one hot encoder)",
                    "Visualización de datos en Dashboard de BI (powerBI, Tableu))",
                    "Uso de técnicas avanzadas de limpieza de datos (eliminación de valores atípicos, imputación de valores faltantes)"
                ],
                typeExtra:[
                    "Uso de técnicas de reducción de dimensionalidad (PCA, t-SNE)",
                ]
            },
            themes: {
                typeBasic: [
                    "Estadística en el análisis de datos",
                    "Data Cleaning con Python",
                    "Tipos de gráficas en analisis de datos",
                    "ETLs",
                    "PowerBi y alternativas",
                    "Storytelling de datos"
                ],
                typeExtra: [
                    "Implementación de pipelines automatizados para limpieza y preprocesamiento de datos con herramientas como scikit-learn o TensorFlow Data",
                ]
            }
        },
        {
    module: "Módulo 1",
    name: "Desarrollo de interfaces dinámicas",
    indicator: {
        typeBasic: [
            "Streamlit",
            "Dash",
            "Plotly",
            "Bokeh",
            "HTML, CSS y JavaScript",
            "Principios de diseño UI/UX",
            "Integración de gráficos dinámicos e interactivos"
        ],
        typeExtra: [
            "Bases de datos en tiempo real (Firebase, Supabase)",
            "Autenticación de usuarios",
            "Dashboards colaborativos o multiusuario",
        ]
    },
    themes: {
        typeBasic: [
            "Fundamentos de diseño UI/UX",
            "HTML, CSS y JavaScript",
            "Streamlit",
            "Dash y Plotly",
            "Bokeh",
            "Visualización interactiva de datos",
        ],
        typeExtra: [
            "Integración con APIs REST",
            "React para dashboards avanzados",
        ]
    }
}

,        {
            name: ["Ser capaz de desarrollar un programa en Python"],
            indicator: {
                typeBasic: [
                    "Uso de bucles", 
                    "Uso de condicionales",
                    "Uso de Funciones, programación funcional",
                    "Uso de Control de errores (cláusula try/except)",
                    "Uso de herramientas de logger",
                    "Uso de POO (Programación Orientada a Objetos)",
                    "Uso de librerias",
                    "Uso de jupyter",
                    "Uso de Entornos virtuales (venv, conda, virtualenv)",
                    "Uso de Archivo de dependencias (requirements.txt)",
                ],
                typeExtra: [
                    "Uso de decoradores", 
                    "Uso de funciones lambda",
                    "Uso de itertools",
                    "Uso de hilos",
                    "Uso de métodos mágicos (__call__, __iter__, __next__)",
                    "Desarrollo de decoradores"
                ]
            },
            themes: {
                typeBasic: [
                    "Introducción a Python (tipos de datos, variables, operadores, estructuras de control)",
                    "Entornos virtuales (venv, conda, virtualenv)",
                    "Entornos de desarrollo IDEs (VSCode, Pycharm) & notebooks(Jupyter notebook, google colab)",
                    "POO (Programación Orientada a Objetos)",
                    "Programación funcional",
                    "Heramientas de logger",
                    "IOT",
                    "Introducción a redes y protocolos de comunicación",
                    "Regex",

                ],
                typeExtra: [
                    "Desarrollo de decoradores",
                    "Métodos mágicos",
                    "Hilos en python",
                    "Itertools",
                    "Protocolo SSH",
                    "Cross-site-origin (CORS)",
                ]
            }
        },
        // 
        // 
        {
            name: "Diseñar y gestionar bases de datos",
            indicator: {
                typeBasic: [
                    "Uso de Modelado de datos",
                    "Consumir grandes volúmenes de datos en tiempo real (Kafka) ",
                    "Guardar datos en base de datos SQL",
                    "Guardar datos en base de datos NoSQL",
                    "Uso de Normalización de datos"
                ],
                typeExtra: [
                    "Implementación de técnicas de seguridad en bases de datos", 
                    "Implementación de bases de datos en la nube"
                ]
            },
            themes: {
                typeBasic: [
                    "Bases de datos relacionales (sql, mysql, postgresql)",
                    "Bases de datos no relacionales (mongo, firebase) & bases de datos vectoriales",
                    "ORM/ODM",
                    "Diagrama ER",
                    "Normalización de datos"
                ],
                typeExtra: [
                    "Diseño y gestión de bases de datos de alta disponibilidad y recuperación ante desastres", 
                    "Migración y actualización de bases de datos: Estrategias y mejores prácticas"
                ]
            }
        },
        //
        {
            name: "Despliegue de aplicaciones",
            indicator: {
                typeBasic: [
                    "Uso de Docker",
                    "Uso de un servicio de cloud (Azure, AWS, etc)",
                    "Uso de plataformas de deployment (render, etc)"
                ],
                typeExtra: [
                    "Uso avanzado de herramientas de orquestación de contenedores (Docker Compose, Kubernetes, Docker Swarm)", 
                    "Implementación de pipelines CI/CD para automatización de despliegues (Jenkins, GitLab CI, GitHub Actions)",
                    "Desarrollo de arquitecturas de microservicios con Kafka como backbone de comunicación"

                ]
            },
            themes: {
                typeBasic: [
                    "Introducción a docker (contenedores, imágenes, volúmenes, redes)",
                    "Despliegue y gestión de microservicios en la nube (Docker Compose)"
                ],
                typeExtra: [
                    "Implementación de Kafka en microservicios con Docker y Kubernetes", 
                    "Optimización de costos y gestión de recursos en la nube",
                    "Cloud Computing",
                    "HDFS",
                    "MLOps"
                ]
            }
        },
        {
            name: "Aplicar algoritmos de aprendizaje automático",
            indicator: {
                typeBasic: [
                    "Seleccionar las variables que son útiles y las que no lo son",
                    "Reconocer si es un problema de regresión o de clasificación",
                    "Separación de datos en train/test",
                    "Entrenar un modelo simple de ML  (SVM, Logistic Regression, Linear Regression, Decission Tree, Naive Bayes)",
                    "Reconocer un caso de aprendizaje no supervisado",
                    "Aplicar modelos de clustering",
                    "Uso modelos de ensemble (RandomForest, GradientBoosting, AdaBoost, XGBoost, LightGBM)",
                    "Uso de técnicas avanzadas de visualización como heatmaps, pairplots, y 3D visualizations",
                    "Introducción a estadística para Machine Learning"
                ],
                typeExtra: [
                    "Análisis de series temporales y visualización con Plotly y seaborn", 
                    "Optimización del rendimiento de las herramientas de visualización para grandes volúmenes de datos (técnicas de muestreo y reducción de dimensionalidad)"
                ]
            },
            themes: {
                typeBasic: [
                    "Humanismo y ética de la IA",
                    "ML Supervisado - Algoritmos clasicos",
                    "Ingeneria de Caracteristicas",
                    "ML No Supervisado - Algoritmos clásicos",
                    "Estadística en Machine Learning",
                    "Etapas de un proyecto de ML",
                    "Validación Cruzada",
                    "Perceptrón",

                ],
                typeExtra: [
                    "Implementación de pipelines de preprocesamiento y análisis con scikit-learn y pandas",
                ]
            }
        },
        {
            module: "Módulo 3",
            name: "Optimizar parámetros de IA",
            indicator: {
                typeBasic: [
                    "Optimización de Hiperparámetros",
                    "Aplica técnicas de regularización",
                    "Conocer las métricas de evaluación típicas de cada tipo de problema (MSE, Recall, F1, etc)",
                    "Tratamiento de Datos Desbalanceados",
                    "Selecciona el modelo adecuado",
                    "Uso de modelos de redes neuronales",
                    "Visualización de resultados y métricas",
                    "Procesar y almacenar datos de eventos en tiempo real",
                ],
                typeExtra: [
                    "Entender los componentes de una red neuronal y su funcionamiento (funciones de activacion, descenso de gradiente, backpropagation, etc",
                    "Transfer Learning",
                    "Data Augmentation",
                    "Implementa pipelines de preprocesamiento",
                ]
            },
            themes: {
                typeBasic: [
                    "Uso de redes Neuronales",
                    "Redes Neuronales Convolucionales",
                    "PCA: reducción de la dimensionalidad",
                    "Autoencoders",
                    "Algoritmo de Backpropagation",
                    "Descenso del Gradiente y optimizadores",
                    "Tecnicas Ensamble",
                ],
                typeExtra: [
                    "MLOps",
                ]
            }
        },
        
       
    ]
}

const { weeks, stack, periods, modules, links, title } = bootcampData;

//Generate the roadmap on page load
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Generate the roadmap on page load
    generateGantt();
});

// Generate table depending on the number of weeks
function setWeeksValue(weeksNumber) {
    const weeksInput = document.getElementById("weeks");
    weeksInput.setAttribute("value", weeksNumber); 
}

//Generate title
 function setTitle(title) {
    const titleElement = document.getElementById("nav-title");
    const titleDocument = document.querySelector("title");
    titleElement.textContent = title;
    titleDocument.textContent = title;
 }

//Generate the links
function setLinks(links) {
    const link_buttons = document.querySelectorAll("[data-link]");

    // Itera sobre los botones y asigna los enlaces dinámicamente
    link_buttons.forEach(button => {
        const linkType = button.getAttribute("data-link"); // Obtiene el valor de data-link
        const anchor = button.querySelector("a"); // Encuentra el elemento <a> dentro del botón

        if (links[linkType] && anchor) { // Si hay un enlace asociado y el <a> existe
            anchor.href = links[linkType]; // Asigna el enlace al atributo href
        }

        if(linkType === "googleCalendar") {
            button.setAttribute('src', links[linkType])
         }

    })

} 

function setStackTags(stack){
          
            const list_tag_stack = document.querySelector(".list-inline");
            const types = [...new Set(stack.map(item => item.type))];
    
            function createListItem(item) {
                const listItem = document.createElement("li");
                listItem.classList.add("list-inline-item");
                const badge = document.createElement("span");
                badge.classList.add("badge");
                

                if (item === "Competencia") {
                    badge.classList.add("temas");
                    badge.innerHTML = `<i  class="bi bi-lightbulb-fill"></i> competencia`;
                } else if (item === "Course") {
                    badge.classList.add("certificate-course");
                    badge.innerHTML = `<i class="bi bi-arrow-return-right"></i> <i class="bi bi-bookmark-check"></i> certificado o curso`;
                } else if (item === "Proyecto") {
                    badge.classList.add("project");
                    badge.innerHTML = `<i class="bi bi-briefcase-fill"></i> | <i class="bi bi-people-fill"></i> project`;
                } else if(item === "Transición") {
                    badge.classList.add("transicion");
                    badge.innerHTML = `<i class="bi bi-diagram-3-fill"></i> transición-flexible`
                }

    
               
                listItem.appendChild(badge);
                return listItem;
            }
    
            // Generar la lista dinámica
            types.forEach(item => {
                const listItem = createListItem(item);
                list_tag_stack.appendChild(listItem);
            });
}

//Generate the Gantt chart
function generateGantt() {
    setTitle(title);
    setWeeksValue(bootcampData.weeks);
    setLinks(links);
    setStackTags(stack);
    const weeks = document.getElementById("weeks").value;
    const table = document.getElementById("gantt-table");
    table.innerHTML = ""; 

    if(modules.length > 0) {
        let moduleHeaderRow = "<tr><th class=''>Módulos</th>";

        modules.forEach(module => {
            let colspan = module.end - module.start + 1;
            moduleHeaderRow += `<th colspan="${colspan}">${module.name}</th>`;
        });
        moduleHeaderRow += "</tr>";
        table.innerHTML += moduleHeaderRow;
    }

// generate months 

    let monthHeaderRow = "<tr><th>Meses</th>";
    for (let i = 1; i <= weeks; i += 4) {
        const month = Math.ceil(i / 4);
        let colspan = Math.min(4, weeks - i + 1); 
        monthHeaderRow += `<th colspan="${colspan}">Mes ${month}</th>`;
    }
   
    monthHeaderRow += "</tr>";
    table.innerHTML += monthHeaderRow;

    let weekHeaderRow = "<tr><th>Elemento</th>";
    for (let i = 1; i <= weeks; i++) {
        weekHeaderRow += `<th>${i}</th>`;
    }
    weekHeaderRow += "</tr>";
    table.innerHTML += weekHeaderRow;

    let lastEnd = 0;

    stack.forEach((item) => {
        let colorClass = "";
        let iconoProject = '<i class="bi bi-briefcase-fill"></i>';
        let iconoCompetencia = '<i class="bi bi-lightbulb-fill"></i>';
        let iconoIntegracion = '<i class="bi bi-diagram-3-fill"></i>';
        let iconCertificate = '<i class="bi bi-arrow-return-right"></i><i class="bi bi-bookmark-check"></i>';
        let icon = '';

        if (item.type === "Proyecto") {
            colorClass = "proyecto";
            item.start = item.start ? item.start : lastEnd + 1;
            item.end = item.end ? item.end : item.start + 2;
            icon = iconoProject;
        } else if (item.type === "Competencia") {
            colorClass = "tema";
            item.start = item.start ? item.start : lastEnd + 1;
            item.end = item.end ? item.end : item.start + 2;
            icon = iconoCompetencia;
        } else if (item.type === "Transición") {
            colorClass = "transicion";
            item.start = item.start ? item.start : lastEnd + 1;
            item.end = item.end ? item.end : item.start + 2;
            icon = iconoIntegracion;

        }else if (item.type === "Course") {
            colorClass = "certificate-course";
            item.start = item.start ? item.start : lastEnd + 1;
            item.end = item.end ? item.end : item.start + 2;
            icon = iconCertificate;
        }

        lastEnd = item.end;

        let row = `<tr><td class="label ${colorClass}">${icon} ${item.name}</td>`;

        for (let i = 1; i <= weeks; i++) {
            if (i >= item.start && i <= item.end) {
                row += `<td class="block ${colorClass}"></td>`;
            } else {
                row += `<td class="empty"></td>`;
            }
        }

        row += "</tr>";
        table.innerHTML += row;
    });

    table.style.width = `${weeks * 30 + 260}px`; 

    // Obtener el contenedor del acordeón
    const accordionContainer = document.getElementById('accordion');
    // Generar dinámicamente el contenido del acordeón
    bootcampData.competencies.forEach((competency, index) => {
        const collapseId = `collapse${index}`;
        const headingId = `heading${index}`;
        const expanded = index === 0 ? 'true' : 'false';
        const showClass = index === 0 ? 'show' : '';

        console.log(competency);

        const accordionItem = `
            <div class="accordion-item">
                <h2 class="accordion-header" id="${headingId}">
                    <button class="accordion-button ${index !== 0 ? 'collapsed' : ''}" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#${collapseId}" 
                        aria-expanded="${expanded}" 
                        aria-controls="${collapseId}">
                        <span><i class="bi bi-lightbulb-fill"></i> Competencia:  ${competency.name}</span>
                    </button>
                </h2>
                <div id="${collapseId}" class="accordion-collapse collapse ${showClass}" aria-labelledby="${headingId}" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p><strong>Indicadores</strong></p>
                        <ul>
                            ${competency.indicator?.typeBasic?.length > 0 ? `
                            <li>
                                Básicos
                                <ul class="list-inline">
                                    ${competency.indicator.typeBasic.map(criterio => `<li class="list-inline-item"><span class="badge badge-soft-success">${criterio}</span></li>`).join('')}
                                </ul>
                            </li>
                            ` : ''}
                            ${competency.indicator?.typeExtra?.length > 0 ? `
                            <li>
                                Extra
                                <ul class="list-inline">
                                    ${competency.indicator.typeExtra.map(criterio => `<li class="list-inline-item"><span class="badge badge-soft-danger">${criterio}</span></li>`).join('')}
                                </ul>
                            </li>
                            ` : ''}
                        </ul>
                        ${competency.themes?.typeBasic?.length > 0 ? `<p><strong>Temas</strong></p>` : ''}
                        <ul>
                            ${competency.themes?.typeBasic?.length > 0 ? `
                            <li>
                                Básicos
                                <ul class="list-inline">
                                    ${competency.themes.typeBasic.map(pildora => `<li class="list-inline-item"><span class="badge badge-soft-success">${pildora}</span></li>`).join('')}
                                </ul>
                            </li>
                            ` : ''}
                            ${competency.themes?.typeExtra?.length > 0 ? `
                            <li>
                                Extra
                                <ul class="list-inline">
                                    ${competency.themes.typeExtra.map(pildora => `<li class="list-inline-item"><span class="badge badge-soft-danger">${pildora}</span></li>`).join('')}
                                </ul>
                            </li>
                            ` : ''}
                        </ul>
                    </div>
                </div>
            </div>
    `;


    // Insertar el elemento generado en el contenedor
    accordionContainer.innerHTML += accordionItem;
});
}
