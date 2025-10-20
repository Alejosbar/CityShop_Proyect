document.addEventListener('DOMContentLoaded', () => {

  // --- DATA ---
  const mockBusinesses = [
    {
      id: 1,
      name: "El Barrilito del chef",
      category: "restaurantes",
      description: "Servicios de alimentos y bebidas, eventos sociales, empresariales y a domicilio.",
      image: "https://elbarrilitodelchef.com/wp-content/uploads/2024/04/restaurante-c02.jpg",
      phone: "+57 310 765 2152 – 310 203 5026",
      address: "Km. 5 vía Siberia – Cota",
      rating: 4.4,
      hours: "Desde las 11:00 am hasta las 6:00 pm.",
      comments: [
        { user: "María García", rating: 5, comment: "Excelente comida y servicio" },
        { user: "Carlos López", rating: 4, comment: "Muy buena atención, recomendado" }
      ],
      pdfModal: "pdfModal"
    },
    {
      id: 2,
      name: "HIGASHIHANA Teppanyaki & Sushi",
      category: "restaurantes",
      description: "Servicios de alimentos y bebidas, eventos sociales, empresariales y a domicilio.",
      image: "https://lirp.cdn-website.com/4d219076/dms3rep/multi/opt/F10ABADD-60AB-4875-BA12-9A2182009AB4_L0_001-13_6_2024--7_00_01-a.m.-bd59acb5-402w.jpg",
      phone: "+57 3155557597",
      address: "Calle 153a # 7 - 19,  Bogotá.",
      rating: 4.5,
      hours: "Miércoles a domingos de 12:00 pm a 7:00pm.",
      comments: [
        { user: "María García", rating: 5, comment: "Excelente comida y servicio" },
        { user: "Carlos López", rating: 4, comment: "Muy buena atención, recomendado" }
      ],
      pdfModal: "higashihanaModal"
    },
    {
      id: 3,
      name: "Oshiru",
      category: "restaurantes",
      description: "Servicios de alimentos y bebidas, eventos sociales, empresariales y a domicilio.",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4no8Y1palMsTmPFW2wPln_1vUnfBxaxUwhAT88Itlv-Div9E5VPWMW1o_RO2OXteHv8RtZZxbF_gVj97HkwrcfUZidL0JRheJXgMMKLgAIPxXDf7yUVsrszxttCMPxuNJpAcAqa3Zw=w289-h312-n-k-no",
      phone: "+57 310 987 6543",
      address: "Km1 via, Cota - Chía, Cota, Cundinamarca",
      rating: 4.5,
      hours: "11:30a. m. - 5:30p. m",
      comments: [
        { user: "Ana Rodríguez", rating: 5, comment: "Hermosas prendas y buenos precios" }
      ]
    },
     {
       id: 4,
       name: "KOAJ BASIC",
       category: "ropa",
       description: "Ropa femenina y accesorios",
       image: "https://lh3.googleusercontent.com/p/AF1QipNheqN0u0OPOhfY6KtxV3pAKSkspvEiQFMonAPs=s1360-w1360-h1020-rw",
       phone: "(601) 2948999",
       address: "Cra. 5 #11-19, Cota, Cundinamarca",
       rating: 3.8,
       hours: "9a.m - 9p.m",
       comments: [
         { user: "Ana Rodríguez", rating: 5, comment: "Hermosas prendas y buenos precios" }
       ],
       pdfModal: "koajModal"
     },
    {
      id: 5,
      name: "ELEMENT cota",
      category: "ropa",
      description: "Ropa femenina y accesorios",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDsErKIuI_KA_qaCpY7XlPIBt8yoRkhxIt1A&s",
      phone: "(601) 2948999",
      address: "Cra. 5 #11-63, Cota, Cundinama",
      rating: 5.0,
      hours: "10a.m - 8:30p.m",
      comments: [
        { user: "Ana Rodríguez", rating: 5, comment: "Hermosas prendas y buenos precios" }
      ]
    },
    {
      id: 6,
      name: "Lili Pink",
      category: "ropa",
      description: "Ropa femenina y accesorios",
      image: "https://grafix.com.co/wp-content/uploads/78.08.png",
      phone: "No aplica",
      address: "Cra. 5 #11-63, Cota, Cundinamarca",
      rating: 5.0,
      hours: "10a.m. – 8:30p.m",
      comments: [
        { user: "Ana Rodríguez", rating: 5, comment: "Hermosas prendas y buenos precios" }
      ],
      pdfModal: "liliModal"
    },
     {
      id: 7,
      name: "Centro de Salud",
      category: "emergencias",
      description: "Hospital San Antonio",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqGS37jg5fo2AZyPEYJXIbi_oL_pUPVQvs2cQE15yaEjWsVU1oS6ERR2_9Op0sHEW0-dkGeatkhZVcQnOVTQbqBUYAkuOnpSjT3LNnMvB4RRkVNGN52WUAT0879hDDDhE8dVTuc=s1360-w1360-h1020-rw",
      phone: "No aplica",
      address: "Cra. 6 #12, Cota, Cundinamarca",
      rating: 2.5,
      hours: "24 horas",
      comments: [
        { user: "Pedro Martín", rating: 4, comment: "Servicio rápido y confiable" }
      ]
    },
    {
      id: 8,
      name: "Central Taxi Cota",
      category: "taxi",
      description: "Servicio de taxi 24 horas",
      image: "https://radiotaxi.com.co/wp-content/uploads/Servicio-de-Taxis-cota.jpeg",
      phone: "+57 318 6873737",
      address: "Todo Cota",
      rating: 3.5,
      hours: "24 horas",
      comments: [
        { user: "Pedro Martín", rating: 4, comment: "Servicio rápido y confiable" }
      ]
    },
        {
      id: 9,
      name: "Alcaldía de Cota",
      category: "alcaldia",
      description: "Es el gobierno municipal que busca la mejora de la calidad de vida de los habitantes de Cota",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqGS37jg5fo2AZyPEYJXIbi_oL_pUPVQvs2cQE15yaEjWsVU1oS6ERR2_9Op0sHEW0-dkGeatkhZVcQnOVTQbqBUYAkuOnpSjT3LNnMvB4RRkVNGN52WUAT0879hDDDhE8dVTuc=s1360-w1360-h1020-rw",
      phone: " (601) 7451453",
      address: "Cra. 6 #12, Cota, Cundinamarca",
      rating: 4.3,
      hours: "8a.m - 5p.m",
      comments: [
        { user: "Pedro Martín", rating: 4, comment: "Servicio rápido y confiable" }
      ]
    }
  ];

  const categories = [
    { id: "restaurantes", name: "Restaurantes", icon: "🍽️" },
    { id: "ropa", name: "Tiendas de Ropa", icon: "👕" },
    { id: "emergencias", name: "Emergencias", icon: "🚨" },
    { id: "taxi", name: "Servicios de Taxi", icon: "🚕" },
    { id: "alcaldia", name: "Alcaldía", icon: "🏛️" }
  ];

  let chatMessages = [
    { type: 'bot', message: '¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?' }
  ];

  // --- STATE ---
  let selectedCategory = 'todos';

  // --- SELECTORS ---
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('.nav-link');
  const categoriesList = document.getElementById('categories-list');
  const businessList = document.getElementById('business-list');
  const businessListTitle = document.getElementById('business-list-title');
  const businessDetailContainer = document.getElementById('business-detail');
  const registerCategorySelect = document.getElementById('register-category-select');
  const chatMessagesContainer = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const chatSendBtn = document.getElementById('chat-send-btn');

  // --- RENDER FUNCTIONS ---
  const renderCategories = () => {
    categoriesList.innerHTML = '';
    // "Todos" button
    const allButton = document.createElement('button');
    allButton.className = `btn category-btn d-flex align-items-center ${selectedCategory === 'todos' ? 'active' : ''}`;
    allButton.innerHTML = `
      <span class="fs-4 me-3">📋</span>
      <div class="text-start">
        <div>Todos los Negocios</div>
        <div class="small text-muted">${mockBusinesses.length} registrados</div>
      </div>
    `;
    allButton.addEventListener('click', () => {
      selectedCategory = 'todos';
      renderAll();
    });
    categoriesList.appendChild(allButton);

    // Other categories
    categories.forEach(category => {
      const button = document.createElement('button');
      button.className = `btn category-btn d-flex align-items-center ${selectedCategory === category.id ? 'active' : ''}`;
      const businessCount = mockBusinesses.filter(b => b.category === category.id).length;
      button.innerHTML = `
        <span class="fs-4 me-3">${category.icon}</span>
        <div class="text-start">
          <div>${category.name}</div>
          <div class="small text-muted">${businessCount} disponibles</div>
        </div>
      `;
      button.addEventListener('click', () => {
        selectedCategory = category.id;
        renderAll();
      });
      categoriesList.appendChild(button);
    });
  };

  const renderBusinesses = () => {
    businessList.innerHTML = '';
    const filteredBusinesses = selectedCategory === 'todos'
      ? mockBusinesses
      : mockBusinesses.filter(b => b.category === selectedCategory);

    const categoryName = categories.find(c => c.id === selectedCategory)?.name || 'Negocios';
    businessListTitle.textContent = selectedCategory === 'todos' ? 'Todos los Negocios' : categoryName;

    filteredBusinesses.forEach(business => {
      const card = document.createElement('div');
      card.className = 'card business-card';
      card.innerHTML = `
        <div class="card-body">
          <div class="d-flex">
            <img src="${business.image}" alt="${business.name}" class="rounded-3 me-3" style="width: 80px; height: 80px; object-fit: cover;">
            <div class="flex-grow-1">
              <h5 class="card-title mb-1">${business.name}</h5>
              <p class="card-text small text-muted mb-2">${business.description}</p>
              <div class="d-flex small text-muted align-items-center">
                <i class="bi bi-star-fill text-warning me-1"></i> ${business.rating}
                <span class="mx-2">•</span>
                <i class="bi bi-clock me-1"></i> ${business.hours}
              </div>
            </div>
          </div>
          ${business.pdfModal ? `<button class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#${business.pdfModal}">${business.category === 'ropa' ? 'Ver Catálogo' : 'Ver Menú'}</button>` : ''}
        </div>
      `;
      card.addEventListener('click', () => showBusinessDetail(business.id));
      businessList.appendChild(card);
    });
  };

  const renderAll = () => {
    renderCategories();
    renderBusinesses();
  };

  const renderRegisterCategories = () => {
    registerCategorySelect.innerHTML = '<option>Selecciona una categoría</option>';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        registerCategorySelect.appendChild(option);
    });
  }

  // --- PAGE/VIEW LOGIC ---
  const showPage = (pageId) => {
    pages.forEach(page => {
      page.style.display = page.id === pageId ? 'block' : 'none';
    });
    // Special case for detail page, as it's not in the main nav
    if (pageId === 'business-detail') {
        document.getElementById('home').style.display = 'none';
    }
  };

  const updateActiveNavLink = (hash) => {
    navLinks.forEach(link => {
      if (link.hash === hash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  const handleNavigation = () => {
    const hash = window.location.hash || '#home';
    const pageId = hash.substring(1);
    showPage(pageId);
    updateActiveNavLink(hash);
  };

  const showBusinessDetail = (businessId) => {
    const business = mockBusinesses.find(b => b.id === businessId);
    if (!business) return;

    let commentsHtml = business.comments.map(comment => `
      <div class="card mb-2">
        <div class="card-body">
          <div class="d-flex align-items-center mb-2">
            <div class="d-inline-flex align-items-center justify-content-center rounded-circle bg-success text-white me-2" style="width: 40px; height: 40px;">
              <i class="bi bi-person"></i>
            </div>
            <div>
              <div class="fw-bold">${comment.user}</div>
              <div class="text-warning">${'★'.repeat(comment.rating)}${'☆'.repeat(5 - comment.rating)}</div>
            </div>
          </div>
          <p class="card-text text-muted">${comment.comment}</p>
        </div>
      </div>
    `).join('');

    businessDetailContainer.innerHTML = `
      <button id="back-to-home" class="btn btn-outline-secondary mb-3"><i class="bi bi-arrow-left me-2"></i>Volver</button>
      <img src="${business.image}" class="img-fluid rounded-3 mb-3" style="max-height: 300px; width: 100%; object-fit: cover;" alt="${business.name}">
      <h1 class="text-success">${business.name}</h1>
      <p class="lead text-muted mb-4">${business.description}</p>
      <ul class="list-group list-group-flush mb-4">
        <li class="list-group-item"><i class="bi bi-telephone-fill me-2 text-success"></i>${business.phone}</li>
        <li class="list-group-item"><i class="bi bi-geo-alt-fill me-2 text-success"></i>${business.address}</li>
        <li class="list-group-item"><i class="bi bi-clock-fill me-2 text-success"></i>${business.hours}</li>
        <li class="list-group-item"><i class="bi bi-star-fill me-2 text-warning"></i>${business.rating} estrellas</li>
      </ul>
      <h3 class="h5">Comentarios y Referencias</h3>
      ${commentsHtml}
    `;

    document.getElementById('back-to-home').addEventListener('click', () => {
      showPage('home');
      businessDetailContainer.style.display = 'none';
      document.getElementById('home').style.display = 'block';
    });

    showPage('business-detail');
  };

  // --- CHAT LOGIC ---
  const renderChatMessages = () => {
    chatMessagesContainer.innerHTML = '';
    chatMessages.forEach(msg => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `p-3 mb-2 chat-${msg.type}`;
        msgDiv.textContent = msg.message;
        chatMessagesContainer.appendChild(msgDiv);
    });
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
  };

  const handleSendMessage = () => {
    const message = chatInput.value.trim();
    if (!message) return;

    chatMessages.push({ type: 'user', message });
    renderChatMessages();
    chatInput.value = '';

    setTimeout(() => {
      let botResponse = '';
      const lowerMessage = message.toLowerCase();
      
      if (lowerMessage.includes('restaurante') || lowerMessage.includes('comida')) {
        botResponse = 'Te recomiendo Restaurante La Cazuela, tienen excelente comida típica colombiana. ¿Te gustaría ver más información?';
      } else if (lowerMessage.includes('ropa') || lowerMessage.includes('tienda')) {
        botResponse = 'Boutique Elegancia tiene hermosas prendas femeninas. ¿Necesitas información de contacto?';
      } else if (lowerMessage.includes('taxi') || lowerMessage.includes('transporte')) {
        botResponse = 'Taxi Express Cota ofrece servicio 24 horas. Su número es +57 320 456 7890';
      } else if (lowerMessage.includes('emergencia') || lowerMessage.includes('ayuda')) {
        botResponse = 'Para emergencias puedes contactar: Policía 123, Bomberos 119, Cruz Roja 132';
      } else {
        botResponse = 'Puedo ayudarte con información sobre restaurantes, tiendas de ropa, servicios de taxi, emergencias y la alcaldía de Cota. ¿Qué necesitas?';
      }
      
      chatMessages.push({ type: 'bot', message: botResponse });
      renderChatMessages();
    }, 1000);
  };

  // --- INITIALIZATION & EVENT LISTENERS ---
  window.addEventListener('hashchange', handleNavigation);
  window.addEventListener('load', handleNavigation);

  chatSendBtn.addEventListener('click', handleSendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSendMessage();
  });

  renderAll();
  renderRegisterCategories();
  renderChatMessages();
});
