const vendors = [
    {
        id: 'v1',
        name: 'Sparkle Clean Laundry',
        rating: 4.8,
        reviews: 342,
        distance: '1.2 km',
        distanceValue: 1.2,
        eta: '24h',
        etaValue: 24,
        verified: true,
        hasGuarantee: true,
        stats: { ordersCompleted: 2840, onTimeRate: 97, issueRate: 0.8 },
        services: ['Basic Wash', 'Dry Clean'],
        priceRange: '₹10-15/piece',
        priceValue: 10,
        yearsInOp: 5,
        photo: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=600&h=400&q=80',
        guarantee: 'Up to ₹5,000 compensation for lost or damaged items.',
        serviceList: [
            { id: 's1', name: 'Basic Wash', price: 10, unit: 'piece', eta: '48 hours' },
            { id: 's2', name: 'Dry Clean', price: 80, unit: 'piece', eta: '72 hours' },
            { id: 's3', name: 'Ironing', price: 7, unit: 'piece', eta: '24 hours' },
            { id: 's4', name: 'Shoe Wash', price: 60, unit: 'pair', eta: '72 hours' }
        ],
        slots: ['Today 4–6 PM', 'Today 6–8 PM', 'Tomorrow 10–12 PM'],
        reviewsList: [
            { name: 'Rahul M.', service: 'Dry Clean', text: 'Excellent service! My suit looks brand new and they delivered exactly on time.' },
            { name: 'Sneha P.', service: 'Basic Wash', text: 'Very convenient and affordable. The clothes smell great.' },
            { name: 'Arun K.', service: 'Ironing', text: 'Professional packaging. The pickup rider was very polite.' }
        ]
    },
    {
        id: 'v2',
        name: 'Fresh Fold Hub',
        rating: 4.5,
        reviews: 128,
        distance: '2.5 km',
        distanceValue: 2.5,
        eta: '48h',
        etaValue: 48,
        verified: true,
        hasGuarantee: true,
        stats: { ordersCompleted: 940, onTimeRate: 91, issueRate: 1.4 },
        services: ['Basic Wash', 'Ironing'],
        priceRange: '₹8-12/piece',
        priceValue: 8,
        yearsInOp: 3,
        photo: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=600&h=400&q=80',
        guarantee: 'Up to ₹2,500 compensation for lost or damaged items.',
        serviceList: [
            { id: 's1', name: 'Basic Wash', price: 8, unit: 'piece', eta: '48 hours' },
            { id: 's3', name: 'Ironing', price: 6, unit: 'piece', eta: '24 hours' }
        ],
        slots: ['Tomorrow 8–10 AM', 'Tomorrow 4–6 PM', 'Wed 10–12 PM'],
        reviewsList: [
            { name: 'Priya S.', service: 'Basic Wash', text: 'Fast and reliable, but they missed a stain on my shirt.' },
            { name: 'Anil T.', service: 'Ironing', text: 'Super crisp shirts. Highly recommended for daily wear.' },
            { name: 'Megha R.', service: 'Basic Wash', text: 'Good packaging, and reasonable pricing.' }
        ]
    },
    {
        id: 'v3',
        name: 'Premium Dry Cleaners',
        rating: 4.9,
        reviews: 512,
        distance: '3.1 km',
        distanceValue: 3.1,
        eta: '72h',
        etaValue: 72,
        verified: true,
        hasGuarantee: true,
        stats: { ordersCompleted: 4200, onTimeRate: 98, issueRate: 0.3 },
        services: ['Dry Clean', 'Shoe Wash'],
        priceRange: '₹50-100/piece',
        priceValue: 50,
        yearsInOp: 10,
        photo: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&h=400&q=80',
        guarantee: 'Full replacement value guarantee on premium garments.',
        serviceList: [
            { id: 's2', name: 'Dry Clean', price: 100, unit: 'piece', eta: '72 hours' },
            { id: 's4', name: 'Shoe Wash', price: 299, unit: 'pair', eta: '96 hours' },
            { id: 's5', name: 'Wedding Wear', price: 599, unit: 'piece', eta: '7 days' }
        ],
        slots: ['Today 6–8 PM', 'Tomorrow 2–4 PM', 'Thu 10–12 PM'],
        reviewsList: [
            { name: 'Kiran V.', service: 'Dry Clean', text: 'The best place for silk sarees and heavy lehengas. Spotless work.' },
            { name: 'Rajesh N.', service: 'Shoe Wash', text: 'Brought my old sneakers back to life. Very impressed!' },
            { name: 'Simran K.', service: 'Wedding Wear', text: 'Handled my expensive gown with utmost care. A bit pricey but worth it.' }
        ]
    },
    {
        id: 'v4',
        name: 'QuickWash Express',
        rating: 4.3,
        reviews: 89,
        distance: '0.8 km',
        distanceValue: 0.8,
        eta: '24h',
        etaValue: 24,
        verified: true,
        hasGuarantee: false,
        stats: { ordersCompleted: 620, onTimeRate: 88, issueRate: 2.1 },
        services: ['Basic Wash', 'Ironing'],
        priceRange: '₹7-10/piece',
        priceValue: 7,
        yearsInOp: 2,
        photo: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=600&h=400&q=80',
        guarantee: null,
        serviceList: [
            { id: 's1', name: 'Basic Wash', price: 7, unit: 'piece', eta: '24 hours' },
            { id: 's3', name: 'Ironing', price: 5, unit: 'piece', eta: '12 hours' }
        ],
        slots: ['Today 2–4 PM', 'Today 5–7 PM', 'Tomorrow 9–11 AM'],
        reviewsList: [
            { name: 'Divya R.', service: 'Basic Wash', text: 'Super fast and the clothes were clean. Good for everyday wear.' },
            { name: 'Suresh M.', service: 'Ironing', text: 'Crisp and quick. My go-to for office shirts.' }
        ]
    },
    {
        id: 'v5',
        name: 'Pristine Garment Care',
        rating: 4.7,
        reviews: 214,
        distance: '3.8 km',
        distanceValue: 3.8,
        eta: '48h',
        etaValue: 48,
        verified: true,
        hasGuarantee: true,
        stats: { ordersCompleted: 1850, onTimeRate: 95, issueRate: 0.6 },
        services: ['Dry Clean', 'Basic Wash', 'Ironing'],
        priceRange: '₹12-90/piece',
        priceValue: 12,
        yearsInOp: 7,
        photo: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&h=400&q=80',
        guarantee: 'Up to ₹4,000 compensation for damaged garments.',
        serviceList: [
            { id: 's1', name: 'Basic Wash', price: 12, unit: 'piece', eta: '48 hours' },
            { id: 's2', name: 'Dry Clean', price: 90, unit: 'piece', eta: '72 hours' },
            { id: 's3', name: 'Ironing', price: 8, unit: 'piece', eta: '24 hours' }
        ],
        slots: ['Tomorrow 11–1 PM', 'Day After 9–11 AM', 'Day After 3–5 PM'],
        reviewsList: [
            { name: 'Ananya S.', service: 'Dry Clean', text: 'My woollens came back looking brand new. Exceptional care.' },
            { name: 'Ramesh B.', service: 'Basic Wash', text: 'Consistent quality every time. Highly recommend.' },
            { name: 'Tanya K.', service: 'Ironing', text: 'Perfect creases on my formal wear. Very professional.' }
        ]
    },
    {
        id: 'v6',
        name: 'Sudz & Shine',
        rating: 4.1,
        reviews: 56,
        distance: '1.9 km',
        distanceValue: 1.9,
        eta: '36h',
        etaValue: 36,
        verified: false,
        hasGuarantee: false,
        stats: { ordersCompleted: 310, onTimeRate: 83, issueRate: 3.0 },
        services: ['Basic Wash', 'Shoe Wash'],
        priceRange: '₹6-50/piece',
        priceValue: 6,
        yearsInOp: 1,
        photo: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&h=400&q=80',
        guarantee: null,
        serviceList: [
            { id: 's1', name: 'Basic Wash', price: 6, unit: 'piece', eta: '36 hours' },
            { id: 's4', name: 'Shoe Wash', price: 50, unit: 'pair', eta: '48 hours' }
        ],
        slots: ['Tomorrow 8–10 AM', 'Tomorrow 6–8 PM'],
        reviewsList: [
            { name: 'Pradeep L.', service: 'Basic Wash', text: 'Affordable and decent quality. A few items smelled a bit.' },
            { name: 'Kavitha N.', service: 'Shoe Wash', text: 'Shoes looked clean but took longer than promised.' }
        ]
    },
    {
        id: 'v7',
        name: 'Royal Steam Laundry',
        rating: 4.6,
        reviews: 178,
        distance: '4.2 km',
        distanceValue: 4.2,
        eta: '48h',
        etaValue: 48,
        verified: true,
        hasGuarantee: true,
        stats: { ordersCompleted: 1420, onTimeRate: 93, issueRate: 1.0 },
        services: ['Dry Clean', 'Ironing', 'Wedding Wear'],
        priceRange: '₹60-500/piece',
        priceValue: 60,
        yearsInOp: 8,
        photo: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=600&h=400&q=80',
        guarantee: 'Up to ₹8,000 compensation on luxury garments.',
        serviceList: [
            { id: 's2', name: 'Dry Clean', price: 120, unit: 'piece', eta: '72 hours' },
            { id: 's3', name: 'Ironing', price: 10, unit: 'piece', eta: '24 hours' },
            { id: 's5', name: 'Wedding Wear', price: 500, unit: 'piece', eta: '5 days' }
        ],
        slots: ['Tomorrow 10–12 PM', 'Wed 2–4 PM', 'Thu 11–1 PM'],
        reviewsList: [
            { name: 'Meera J.', service: 'Wedding Wear', text: 'Trusted them with my bridal lehenga. Came back absolutely perfect!' },
            { name: 'Sanjay P.', service: 'Dry Clean', text: 'Steam pressing on my suits is top-notch. Worth every rupee.' },
            { name: 'Leela V.', service: 'Ironing', text: 'Fast and precise. Great for bulk ironing orders.' }
        ]
    },
    {
        id: 'v8',
        name: 'CleanMate Services',
        rating: 4.2,
        reviews: 103,
        distance: '2.1 km',
        distanceValue: 2.1,
        eta: '24h',
        etaValue: 24,
        verified: true,
        hasGuarantee: false,
        stats: { ordersCompleted: 780, onTimeRate: 90, issueRate: 1.8 },
        services: ['Basic Wash', 'Ironing', 'Shoe Wash'],
        priceRange: '₹8-55/piece',
        priceValue: 8,
        yearsInOp: 4,
        photo: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=600&h=400&q=80',
        guarantee: null,
        serviceList: [
            { id: 's1', name: 'Basic Wash', price: 8, unit: 'piece', eta: '24 hours' },
            { id: 's3', name: 'Ironing', price: 6, unit: 'piece', eta: '12 hours' },
            { id: 's4', name: 'Shoe Wash', price: 55, unit: 'pair', eta: '48 hours' }
        ],
        slots: ['Today 3–5 PM', 'Tomorrow 9–11 AM', 'Tomorrow 4–6 PM'],
        reviewsList: [
            { name: 'Arjun T.', service: 'Basic Wash', text: 'Reliable pick-up and delivery. Clothes came back fresh.' },
            { name: 'Nisha R.', service: 'Shoe Wash', text: 'Good job on my white sneakers. Will use again.' }
        ]
    },
    {
        id: 'v9',
        name: 'NeatFreak Laundry Co.',
        rating: 4.8,
        reviews: 267,
        distance: '3.3 km',
        distanceValue: 3.3,
        eta: '36h',
        etaValue: 36,
        verified: true,
        hasGuarantee: true,
        stats: { ordersCompleted: 2100, onTimeRate: 96, issueRate: 0.5 },
        services: ['Basic Wash', 'Dry Clean', 'Ironing', 'Shoe Wash'],
        priceRange: '₹10-95/piece',
        priceValue: 10,
        yearsInOp: 6,
        photo: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&h=400&q=80',
        guarantee: 'Up to ₹6,000 compensation for any garment damage.',
        serviceList: [
            { id: 's1', name: 'Basic Wash', price: 10, unit: 'piece', eta: '36 hours' },
            { id: 's2', name: 'Dry Clean', price: 95, unit: 'piece', eta: '72 hours' },
            { id: 's3', name: 'Ironing', price: 7, unit: 'piece', eta: '24 hours' },
            { id: 's4', name: 'Shoe Wash', price: 65, unit: 'pair', eta: '48 hours' }
        ],
        slots: ['Tomorrow 7–9 AM', 'Tomorrow 1–3 PM', 'Wed 10–12 PM'],
        reviewsList: [
            { name: 'Pooja A.', service: 'Basic Wash', text: 'Hands down the best laundry in the area. Everything comes back spotless.' },
            { name: 'Vikram S.', service: 'Dry Clean', text: 'My blazers and trousers always look showroom-fresh.' },
            { name: 'Riya M.', service: 'Shoe Wash', text: 'They treated my expensive sneakers like their own. Brilliant!' }
        ]
    },
    {
        id: 'v10',
        name: 'DhobaGhar Modern',
        rating: 3.9,
        reviews: 41,
        distance: '0.5 km',
        distanceValue: 0.5,
        eta: '48h',
        etaValue: 48,
        verified: false,
        hasGuarantee: false,
        stats: { ordersCompleted: 195, onTimeRate: 79, issueRate: 4.2 },
        services: ['Basic Wash'],
        priceRange: '₹5-8/piece',
        priceValue: 5,
        yearsInOp: 1,
        photo: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=600&h=400&q=80',
        guarantee: null,
        serviceList: [
            { id: 's1', name: 'Basic Wash', price: 5, unit: 'piece', eta: '48 hours' }
        ],
        slots: ['Tomorrow 10–12 PM', 'Day After 8–10 AM'],
        reviewsList: [
            { name: 'Gopal R.', service: 'Basic Wash', text: 'Cheapest around. Quality is okay for casual clothes.' },
            { name: 'Usha K.', service: 'Basic Wash', text: 'A little slow but gets the job done at a great price.' }
        ]
    }
];

const app = {
    currentView: 'home',
    selectedVendor: null,
    activeFilter: 'All',
    activeSort: 'distance',
    activeReviewFilter: 'All',
    cart: {},
    bookingStep: 1,
    bookingDate: 'Today',
    bookingTime: null,
    paymentMethod: 'UPI',
    selectedAddressType: 'Home',
    enteredPhone: '',
    orderPaid: false,
    orderStatus: 'weighing',
    orderTimer: null,
    garmentDecision: null,
    orderedServices: [],
    confirmedPrice: 0,
    specialTreatmentCost: 0,

    profile: {
        name: 'Priya S.',
        phone: '+91 98765 43210',
        referralCode: 'PRIYA50',
        addresses: [
            { type: 'Home', line: '123, 4th Cross, 19th Main, Sector 4, HSR Layout, Bangalore 560102' },
            { type: 'Work', line: '91 Springboard, Koramangala, Bangalore 560034' }
        ],
        orderHistory: [
            { id: 'LDY-49281', vendor: 'Sparkle Clean Laundry', date: '2 Jun 2026', total: 240, status: 'Delivered' },
            { id: 'LDY-48102', vendor: 'Fresh Fold Hub', date: '25 May 2026', total: 180, status: 'Delivered' },
            { id: 'LDY-47093', vendor: 'Premium Dry Cleaners', date: '15 May 2026', total: 599, status: 'Delivered' }
        ],
        paymentMethods: [
            { type: 'upi', label: 'priya@okaxis', icon: 'fa-building-columns' },
            { type: 'card', label: 'HDFC ···· 4521', icon: 'fa-credit-card', brand: 'Visa' }
        ],
        notifications: {
            orderUpdates: true,
            delayAlerts: true,
            promotional: false
        }
    },

    showTooltip(id) {
        const el = document.getElementById(id);
        if (el) {
            el.classList.toggle('visible');
            // Auto-hide after 4 seconds
            setTimeout(() => el.classList.remove('visible'), 4000);
        }
    },

    setReviewFilter(f) {
        this.activeReviewFilter = f;
        // Re-render just the reviews section
        const container = document.getElementById('reviews-container');
        const filterEls = document.querySelectorAll('.review-filter-chip');
        if (!container || !this.selectedVendor) return;
        const filtered = f === 'All'
            ? this.selectedVendor.reviewsList
            : this.selectedVendor.reviewsList.filter(r => r.service === f);
        container.innerHTML = filtered.length === 0
            ? '<p style="color:var(--text-secondary); font-size:14px; padding:8px 0;">No reviews for this service yet.</p>'
            : filtered.map(r => `
                <div class="review-card">
                    <div class="review-header">
                        <div class="reviewer-name">${r.name}</div>
                        <div class="review-service">${r.service}</div>
                    </div>
                    <div class="review-rating">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </div>
                    <p class="review-text">"${r.text}"</p>
                </div>
            `).join('');
        filterEls.forEach(el => {
            el.classList.toggle('active', el.dataset.filter === f);
        });
    },
    
    init() {
        this.navigate('login');
    },
    
    getCartTotal() {
        if(!this.selectedVendor) return 0;
        let total = 0;
        this.selectedVendor.serviceList.forEach(s => {
            if (this.cart[s.id]) total += s.price * this.cart[s.id];
        });
        return total;
    },

    startBooking() {
        this.bookingStep = 1;
        this.bookingDate = 'Today';
        this.bookingTime = null;
        this.paymentMethod = 'UPI';
        this.navigate('checkout');
    },
    
    updateCart(serviceId, change) {
        if (!this.cart[serviceId]) this.cart[serviceId] = 0;
        this.cart[serviceId] += change;
        if (this.cart[serviceId] < 0) this.cart[serviceId] = 0;
        
        const qtyEl = document.getElementById(`qty-${serviceId}`);
        if(qtyEl) qtyEl.innerText = this.cart[serviceId];
        
        this.updateTotal();
    },

    updateTotal() {
        let total = this.getCartTotal();
        
        const totalEl = document.getElementById('cart-total-amount');
        const bookBtn = document.getElementById('book-now-btn');
        if(totalEl) {
            totalEl.innerText = `₹${total}`;
        }
        if(bookBtn) {
            if (total > 0) {
                bookBtn.classList.remove('disabled');
                bookBtn.style.opacity = '1';
                bookBtn.style.pointerEvents = 'auto';
            } else {
                bookBtn.classList.add('disabled');
                bookBtn.style.opacity = '0.5';
                bookBtn.style.pointerEvents = 'none';
            }
        }
        
        const checkoutSub = document.getElementById('checkout-subtotal');
        const checkoutEst = document.getElementById('checkout-est');
        const step1Next = document.getElementById('step1-next');
        if(checkoutSub) checkoutSub.innerText = `₹${total}`;
        if(checkoutEst) checkoutEst.innerText = total > 0 ? `₹${Math.floor(total * 0.9)} – ₹${Math.floor(total * 1.2)}` : '₹0';
        if(step1Next) {
            if (total > 0) {
                step1Next.style.opacity = '1';
                step1Next.style.pointerEvents = 'auto';
            } else {
                step1Next.style.opacity = '0.5';
                step1Next.style.pointerEvents = 'none';
            }
        }
    },
    
    setFilter(filter) {
        this.activeFilter = filter;
        if (this.currentView === 'home') this.navigate('home');
    },

    setSort(sort) {
        this.activeSort = sort;
        if (this.currentView === 'home') this.navigate('home');
    },
    
    navigate(view, param = null) {
        this.currentView = view;
        const content = document.getElementById('app-content');
        const bottomNav = document.querySelector('.bottom-nav');
        
        // Hide nav on auth/location screens
        if (['login', 'location', 'checkout', 'payment', 'googleLogin', 'garment-issue'].includes(view)) {
            bottomNav.style.display = 'none';
        } else {
            bottomNav.style.display = 'flex';
        }
        
        // Update nav UI
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        if (['home', 'orders', 'profile'].includes(view)) {
            const navBtn = document.querySelector(`.nav-item[onclick*="${view}"]`);
            if(navBtn) navBtn.classList.add('active');
        }
        
        // Render View
        if (view === 'login') {
            content.innerHTML = this.renderLogin();
        } else if (view === 'location') {
            content.innerHTML = this.renderLocation();
        } else if (view === 'home') {
            content.innerHTML = this.renderHome();
        } else if (view === 'vendor') {
            this.selectedVendor = vendors.find(v => v.id === param);
            content.innerHTML = this.renderVendor();
        } else if (view === 'checkout') {
            content.innerHTML = this.renderCheckout();
        } else if (view === 'orders') {
            content.innerHTML = this.renderOrders();
        } else if (view === 'payment') {
            content.innerHTML = this.renderPayment();
        } else if (view === 'garment-issue') {
            content.innerHTML = this.renderGarmentIssue();
        } else if (view === 'profile') {
            content.innerHTML = this.renderProfile();
        } else if (view === 'googleLogin') {
            content.innerHTML = this.renderGoogleLogin();
        }
    },
    
    // VIEWS
    renderHome() {
        let filteredVendors = vendors.filter(v => {
            if (this.activeFilter === 'All') return true;
            return v.services.includes(this.activeFilter);
        });

        filteredVendors.sort((a, b) => {
            if (this.activeSort === 'distance') return a.distanceValue - b.distanceValue;
            if (this.activeSort === 'price') return a.priceValue - b.priceValue;
            if (this.activeSort === 'rating') return b.rating - a.rating;
            if (this.activeSort === 'eta') return a.etaValue - b.etaValue;
            return 0;
        });

        let vendorHTML = '';
        if (filteredVendors.length === 0) {
            vendorHTML = `
                <div class="empty-state">
                    <div class="empty-icon"><i class="fa-solid fa-shop-slash"></i></div>
                    <h3>No verified vendors near you yet</h3>
                    <p>We'll notify you when new laundry vendors become available in your area.</p>
                    <button class="btn-primary" style="margin-top: 16px;">Notify me when vendors are available</button>
                </div>
            `;
        } else {
            vendorHTML = filteredVendors.map(v => `
                <div class="vendor-card" onclick="app.navigate('vendor', '${v.id}')">
                    <div class="vendor-header">
                        <div>
                            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                                <div class="vendor-name" style="margin-bottom:0;">${v.name}</div>
                                ${v.verified ? `
                                    <div class="tooltip-wrap" onclick="event.stopPropagation(); app.showTooltip('vtt-${v.id}')">
                                        <i class="fa-solid fa-circle-check verified-icon" style="cursor:pointer;"></i>
                                        <div class="tooltip-box" id="vtt-${v.id}">
                                            <strong>Verified by LaundryHub</strong><br>
                                            ✓ Government ID checked<br>✓ Facility inspected<br>✓ 3 test orders completed
                                        </div>
                                    </div>` : ''}
                            </div>
                            <div class="vendor-meta">
                                <span><i class="fa-solid fa-location-dot"></i> ${v.distance}</span>
                                <i class="fa-solid fa-circle"></i>
                                <span><i class="fa-regular fa-clock"></i> ${v.eta} ETA</span>
                            </div>
                        </div>
                        <div class="rating"><i class="fa-solid fa-star"></i> ${v.rating}</div>
                    </div>
                    <div class="vendor-services">
                        <i class="fa-solid fa-jug-detergent" style="margin-right:4px;"></i> ${v.services.join(', ')}
                    </div>
                    <div class="vendor-footer">
                        <div class="price-range">${v.priceRange}</div>
                        ${v.hasGuarantee ? `
                            <div class="tooltip-wrap" onclick="event.stopPropagation(); app.showTooltip('ptt-${v.id}')" style="display:inline-flex;">
                                <div class="protected-badge">
                                    <i class="fa-solid fa-shield-halved"></i> Protected
                                </div>
                                <div class="tooltip-box" id="ptt-${v.id}" style="right:0; left:auto;">
                                    This vendor compensates for lost or damaged garments.
                                </div>
                            </div>` : ''}
                    </div>
                </div>
            `).join('');
        }

        const filters = ['All', 'Basic Wash', 'Dry Clean', 'Ironing', 'Shoe Wash'];
        const filterHTML = filters.map(f => `
            <div class="chip ${this.activeFilter === f ? 'active' : ''}" onclick="app.setFilter('${f}')">${f}</div>
        `).join('');

        return `
            <div class="header">
                <div class="header-top">
                    <div>
                        <div class="header-subtitle">Delivering to</div>
                        <div class="location-pill">Home - HSR Layout <i class="fa-solid fa-chevron-down" style="font-size:10px;"></i></div>
                    </div>
                    <img src="https://ui-avatars.com/api/?name=User&background=EFF6FF&color=2563EB&rounded=true" style="width:40px;height:40px;" alt="Profile">
                </div>
                
                <div class="search-container">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" class="search-input" placeholder="Search for laundry, dry cleaning...">
                </div>
                
                <div class="filter-scroll">
                    ${filterHTML}
                </div>

                <div class="sort-container">
                    <label>Sort by:</label>
                    <select class="sort-select" onchange="app.setSort(this.value)">
                        <option value="distance" ${this.activeSort === 'distance' ? 'selected' : ''}>Distance</option>
                        <option value="price" ${this.activeSort === 'price' ? 'selected' : ''}>Price (Low to High)</option>
                        <option value="rating" ${this.activeSort === 'rating' ? 'selected' : ''}>Rating (High to Low)</option>
                        <option value="eta" ${this.activeSort === 'eta' ? 'selected' : ''}>Fastest Delivery</option>
                    </select>
                </div>
            </div>
            
            <div class="vendor-list">
                ${vendorHTML}
            </div>
        `;
    },
    
    renderVendor() {
        let v = this.selectedVendor;
        this.cart = {}; // Reset cart when opening new vendor
        
        let servicesHTML = v.serviceList.map(s => `
            <div class="service-item" style="display:flex; justify-content:space-between; align-items:center;">
                <div class="service-info" style="flex:1; margin-right:12px;">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:4px;">
                        <h4 style="font-size:15px; margin:0;">${s.name}</h4>
                        <div class="service-price" style="font-weight:700; color:var(--primary); font-size:14px;">₹${s.price}/${s.unit}</div>
                    </div>
                    <p style="font-size:12px; color:var(--text-secondary); margin:0;"><i class="fa-regular fa-clock"></i> Turnaround: ${s.eta}</p>
                </div>
                <div class="qty-control">
                    <button class="qty-btn" onclick="app.updateCart('${s.id}', -1)"><i class="fa-solid fa-minus"></i></button>
                    <span class="qty-val" id="qty-${s.id}">0</span>
                    <button class="qty-btn" onclick="app.updateCart('${s.id}', 1)"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        `).join('');

        let slotsHTML = v.slots.map(slot => `
            <div class="chip" style="margin-bottom:8px; border:1px solid var(--border-color); background:white;">${slot}</div>
        `).join('');

        let reviewsHTML = v.reviewsList.map(r => `
            <div class="review-card">
                <div class="review-header">
                    <div class="reviewer-name">${r.name}</div>
                    <div class="review-service">${r.service}</div>
                </div>
                <div class="review-rating">
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
                <p class="review-text">"${r.text}"</p>
            </div>
        `).join('');

        // Unique services for review filter
        const reviewServices = ['All', ...new Set(v.reviewsList.map(r => r.service))];
        const reviewFilterHTML = reviewServices.map(f => `
            <div class="chip review-filter-chip ${f === 'All' ? 'active' : ''}" data-filter="${f}" onclick="app.setReviewFilter('${f}')" style="font-size:12px; padding:6px 12px;">${f}</div>
        `).join('');

        // Stats row
        const stats = v.stats || { ordersCompleted: 0, onTimeRate: 0, issueRate: 0 };
        const statsHTML = `
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; margin:20px 0;">
                <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:12px; text-align:center;">
                    <div style="font-size:18px; font-weight:700; color:var(--primary);">${stats.ordersCompleted.toLocaleString()}</div>
                    <div style="font-size:11px; color:var(--text-secondary); margin-top:4px; line-height:1.3;">Orders<br>Completed</div>
                </div>
                <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:12px; text-align:center;">
                    <div style="font-size:18px; font-weight:700; color:#16A34A;">${stats.onTimeRate}%</div>
                    <div style="font-size:11px; color:var(--text-secondary); margin-top:4px; line-height:1.3;">On-time<br>Delivery</div>
                </div>
                <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:12px; text-align:center;">
                    <div style="font-size:18px; font-weight:700; color:${stats.issueRate < 1 ? '#16A34A' : '#D97706'};">${stats.issueRate}%</div>
                    <div style="font-size:11px; color:var(--text-secondary); margin-top:4px; line-height:1.3;">Issue<br>Rate</div>
                </div>
            </div>
        `;

        return `
            <div class="page-header" style="position:absolute; background:transparent; box-shadow:none; width:100%; z-index:10;">
                <button class="btn-icon" style="background:rgba(255,255,255,0.85); backdrop-filter:blur(4px); box-shadow:var(--shadow-sm);" onclick="app.navigate('home')"><i class="fa-solid fa-arrow-left"></i></button>
            </div>
            
            <div class="vendor-hero" style="height:220px; background: url('${v.photo}') center/cover;"></div>
            
            <div class="vendor-profile-content" style="padding: 24px 20px; background:var(--bg-main); border-radius: 24px 24px 0 0; margin-top:-24px; position:relative; z-index:5;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                    <div style="flex:1; padding-right:12px;">
                        <div style="display:flex; align-items:center; gap:8px;">
                            <h2 style="font-size:22px; font-weight:700; color:var(--text-primary); margin-bottom:4px;">${v.name}</h2>
                            ${v.verified ? `
                                <div class="tooltip-wrap" onclick="app.showTooltip('vtt-profile')">
                                    <i class="fa-solid fa-circle-check verified-icon" style="font-size:18px; cursor:pointer;"></i>
                                    <div class="tooltip-box" id="vtt-profile">
                                        <strong>Verified by LaundryHub</strong><br>
                                        ✓ Government ID checked<br>✓ Facility inspected<br>✓ 3 test orders completed
                                    </div>
                                </div>` : ''}
                        </div>
                        <div style="color:var(--text-secondary); font-size:14px; margin-top:2px;">
                            Est. ${v.yearsInOp} years in operation
                        </div>
                    </div>
                    <div style="background:var(--bg-card); padding:8px 12px; border-radius:12px; box-shadow:var(--shadow-sm); text-align:center; min-width:64px;">
                        <div style="font-weight:700; font-size:16px; display:flex; align-items:center; justify-content:center; gap:4px;">
                            ${v.rating} <i class="fa-solid fa-star" style="color:var(--warning); font-size:12px;"></i>
                        </div>
                        <div style="font-size:11px; color:var(--text-secondary); margin-top:2px;">${v.reviews} reviews</div>
                    </div>
                </div>

                ${statsHTML}

                <div class="guarantee-box" style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:12px; padding:16px; margin:0 0 24px; display:flex; gap:12px; align-items:flex-start;">
                    <i class="fa-solid fa-shield-halved" style="color:#16A34A; font-size:20px; margin-top:2px;"></i>
                    <div>
                        <div style="font-weight:600; color:#166534; font-size:14px; margin-bottom:6px;">Garment Protection Guarantee</div>
                        <div style="font-size:13px; color:#15803D; line-height:1.4;">${v.guarantee}</div>
                    </div>
                </div>
                
                <div class="section-title" style="padding:0 0 12px 0;">Pickup Availability</div>
                <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:28px;">
                    ${slotsHTML}
                </div>

                <div class="section-title" style="padding:0 0 12px 0; display:flex; justify-content:space-between; align-items:center;">
                    Services
                    <span style="font-size:13px; font-weight:400; color:var(--text-secondary);">Select quantity</span>
                </div>
                <div style="margin-bottom:28px; display:flex; flex-direction:column; gap:12px;">
                    ${servicesHTML}
                </div>
                
                <div class="section-title" style="padding:0 0 12px 0;">Recent Reviews</div>
                <div style="display:flex; gap:8px; margin-bottom:16px; overflow-x:auto; padding-bottom:4px;">
                    ${reviewFilterHTML}
                </div>
                <div id="reviews-container" style="display:flex; flex-direction:column; gap:12px; margin-bottom:100px;">
                    ${reviewsHTML}
                </div>
            </div>
            
            <div class="bottom-action-bar" style="display:flex; justify-content:space-between; align-items:center; padding:16px 20px 30px;">
                <div>
                    <div style="font-size:13px; color:var(--text-secondary); margin-bottom:2px;">Total Estimate</div>
                    <div id="cart-total-amount" style="font-size:22px; font-weight:700; color:var(--primary);">₹0</div>
                </div>
                <button id="book-now-btn" class="btn-primary" style="width:auto; padding:14px 40px; opacity:0.5; pointer-events:none;" onclick="app.startBooking()">Book Now</button>
            </div>
        `;
    },
    
    renderOrders() {
        // If paid, show empty state
        if (this.orderPaid) {
            const pastOrdersHTML = this.profile.orderHistory.map(o => `
                <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:14px 16px; margin-bottom:10px; display:flex; align-items:center; gap:12px;">
                    <div style="width:38px; height:38px; border-radius:10px; background:var(--accent-light); display:flex; align-items:center; justify-content:center; color:var(--accent); flex-shrink:0;">
                        <i class="fa-solid fa-jug-detergent" style="font-size:15px;"></i>
                    </div>
                    <div style="flex:1; min-width:0;">
                        <div style="font-weight:600; font-size:14px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${o.vendor}</div>
                        <div style="font-size:12px; color:var(--text-secondary); margin-top:2px;">${o.date} · <strong style="color:var(--text-primary);">₹${o.total}</strong></div>
                    </div>
                    <div style="display:flex; flex-direction:column; align-items:flex-end; gap:6px; flex-shrink:0;">
                        <span style="background:var(--accent-light); color:var(--accent); font-size:11px; font-weight:600; padding:2px 8px; border-radius:20px;">${o.status}</span>
                        <div style="font-size:11px; color:var(--text-secondary);">${o.id}</div>
                    </div>
                </div>`).join('');
            return `
                <div class="page-header" style="background:var(--bg-card); position:sticky; top:0; z-index:10; border-bottom:1px solid var(--border-color);">
                    <div style="font-weight:600; font-size:16px; flex:1; text-align:center;">My Orders</div>
                </div>
                <div style="padding:24px 20px 40px;">
                    <div style="display:flex; flex-direction:column; align-items:center; text-align:center; padding:24px 12px 28px; background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-lg); margin-bottom:24px;">
                        <div style="width:64px; height:64px; background:var(--accent-light); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:28px; color:var(--accent); margin-bottom:16px;">
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <h3 style="font-size:18px; font-weight:700; margin-bottom:6px;">Order Complete!</h3>
                        <p style="font-size:13px; color:var(--text-secondary); line-height:1.5; margin-bottom:20px;">Your laundry has been delivered and payment is done.</p>
                        <button class="btn-primary" style="width:100%;" onclick="app.navigate('home')">Book Another Order</button>
                    </div>
                    <div style="font-size:16px; font-weight:700; margin-bottom:14px;">Past Orders</div>
                    ${pastOrdersHTML}
                </div>
            `;
        }

        const stepDefs = this.buildOrderSteps();
        const stepKeys = stepDefs.map(s => s.key);
        const statusToKey = {
            weighing: null, collected: 'collected', at_vendor: 'at_vendor',
            garment_issue: 'at_vendor', price_update: 'at_vendor',
            washing: 'washing', drying: 'drying', ironing: 'ironing',
            packed: 'packed', out_for_delivery: 'out_for_delivery', delivered: 'delivered'
        };
        const currentKey = statusToKey[this.orderStatus] || null;
        let activeIdx = currentKey ? stepKeys.indexOf(currentKey) : -1;
        // If key not in dynamic steps (e.g. 'washing' when only ironing selected), find closest prior step
        if (currentKey && activeIdx === -1) {
            const allKeys = ['collected','at_vendor','washing','drying','ironing','packed','out_for_delivery','delivered'];
            const currentPos = allKeys.indexOf(currentKey);
            for (let i = stepKeys.length - 1; i >= 0; i--) {
                if (allKeys.indexOf(stepKeys[i]) <= currentPos) { activeIdx = i; break; }
            }
        }

        const stepsHTML = stepDefs.map((s, i) => {
            const st = i < activeIdx ? 'completed' : i === activeIdx ? 'active' : 'upcoming';
            const icon = st === 'completed'
                ? '<i class="fa-solid fa-circle-check" style="color:#16A34A; background:white; border-radius:50%;"></i>'
                : st === 'active'
                ? '<i class="fa-solid fa-circle-notch fa-spin" style="color:var(--primary); background:white; border-radius:50%;"></i>'
                : '<i class="fa-solid fa-circle" style="color:var(--border-color); background:white; border-radius:50%; font-size:14px;"></i>';
            return `
                <div class="tracking-step ${st}">
                    <div class="tracking-icon">${icon}</div>
                    <div class="tracking-content">
                        <div class="tracking-title">${s.label}</div>
                        ${(st !== 'upcoming' && s.time) ? `<div class="tracking-time">${s.time}</div>` : ''}
                    </div>
                </div>`;
        }).join('');

        // Badge
        const badgeMap = {
            weighing: ['Awaiting Pickup', 'var(--primary-light)', 'var(--primary)'],
            collected: ['Collected', 'var(--primary-light)', 'var(--primary)'],
            at_vendor: ['At Vendor', 'var(--primary-light)', 'var(--primary)'],
            garment_issue: ['Issue Flagged', '#FEF3C7', '#92400E'],
            price_update: ['Price Updated', '#FEF3C7', '#92400E'],
            washing: ['Washing', 'var(--primary-light)', 'var(--primary)'],
            drying: ['Drying', 'var(--primary-light)', 'var(--primary)'],
            ironing: ['Ironing', 'var(--primary-light)', 'var(--primary)'],
            packed: ['Packed', 'var(--primary-light)', 'var(--primary)'],
            out_for_delivery: ['Out for Delivery', 'var(--accent-light)', 'var(--accent)'],
            delivered: ['Delivered', 'var(--accent-light)', 'var(--accent)']
        };
        const [badgeLabel, badgeBg, badgeColor] = badgeMap[this.orderStatus] || badgeMap.weighing;

        // Weighing / confirm pickup card
        const cartTotal = this.getCartTotal();
        const totalWithTreatment = this.confirmedPrice + this.specialTreatmentCost;
        const weighingAlert = this.orderStatus === 'weighing' ? `
            <div class="notification-card" style="background:#EFF6FF; border-color:#BFDBFE; display:block; margin-bottom:20px;">
                <div style="display:flex; gap:12px; margin-bottom:12px;">
                    <i class="fa-solid fa-scale-balanced" style="color:var(--primary); font-size:20px; margin-top:2px;"></i>
                    <div>
                        <h4 style="color:var(--primary); margin-bottom:4px; font-weight:600;">Clothes Weighed</h4>
                        <p style="color:var(--text-primary); font-size:14px; line-height:1.4;">Your clothes have been weighed. Final price: <strong>₹${cartTotal}</strong>.</p>
                    </div>
                </div>
                <button class="btn-primary" style="width:100%; padding:10px; font-size:14px;" onclick="app.confirmPickup()">Confirm Pickup</button>
            </div>`
        : `
            <div style="background:var(--primary-light); border:1px solid #BFDBFE; border-radius:var(--radius-md); padding:12px 16px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; align-items:center; gap:10px;">
                    <i class="fa-solid fa-scale-balanced" style="color:var(--primary); font-size:16px;"></i>
                    <div>
                        <div style="font-size:12px; color:var(--primary); font-weight:600;">Confirmed Price</div>
                        <div style="font-size:11px; color:var(--text-secondary); margin-top:1px;">Weighed &amp; approved${this.specialTreatmentCost > 0 ? ' · +₹' + this.specialTreatmentCost + ' special treatment' : ''}</div>
                    </div>
                </div>
                <div style="font-size:20px; font-weight:700; color:var(--primary);">₹${totalWithTreatment}</div>
            </div>`;

        // Garment issue card
        const garmentCard = this.orderStatus === 'garment_issue' ? `
            <div style="background:#FFF7ED; border:1px solid #FED7AA; border-radius:var(--radius-md); padding:16px; margin-bottom:20px;">
                <div style="display:flex; gap:12px; margin-bottom:12px;">
                    <i class="fa-solid fa-shirt" style="color:#EA580C; font-size:20px; margin-top:2px;"></i>
                    <div>
                        <div style="font-weight:600; color:#9A3412; margin-bottom:4px;">Garment Issue Detected</div>
                        <div style="font-size:13px; color:#C2410C; line-height:1.4;">Vendor flagged a stain on your silk shirt that requires special treatment.</div>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&h=220&q=80"
                     style="width:100%; height:160px; object-fit:cover; border-radius:10px; margin-bottom:12px; display:block;">
                <button class="btn-primary" style="width:100%; padding:10px; font-size:14px; background:white; color:#EA580C; border:1px solid #FED7AA;" onclick="app.navigate('garment-issue')">
                    <i class="fa-solid fa-eye" style="margin-right:6px;"></i> View & Respond
                </button>
            </div>` : '';

        // Price update card
        const updatedPrice = this.confirmedPrice + 50;
        const priceCard = this.orderStatus === 'price_update' ? `
            <div style="background:var(--bg-card); border:1px solid #FCD34D; border-radius:var(--radius-md); padding:16px; margin-bottom:20px;">
                <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
                    <div style="font-weight:600; color:#92400E; display:flex; align-items:center; gap:8px;">
                        <i class="fa-solid fa-file-invoice-dollar"></i> Price Update
                    </div>
                    <div style="font-size:12px; color:var(--text-secondary);">2:15 PM</div>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:14px;">
                    <span style="color:var(--text-secondary);">Original estimate:</span>
                    <span style="font-weight:600; text-decoration:line-through; color:var(--text-secondary);">₹${this.confirmedPrice}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:14px;">
                    <span style="color:var(--text-secondary);">Updated price (with special treatment):</span>
                    <span style="font-weight:700; color:var(--primary); font-size:16px;">₹${updatedPrice}</span>
                </div>
                <div style="font-size:13px; color:var(--text-secondary); background:var(--bg-main); padding:8px; border-radius:8px; margin-bottom:16px;">
                    <strong>Reason:</strong> Premium wash required for silk shirt (+₹50)
                </div>
                <div style="display:flex; gap:12px;">
                    <button class="btn-primary" style="flex:1; padding:10px; font-size:14px;" onclick="app.specialTreatmentCost=50; app.confirmedPrice=app.confirmedPrice; app.progressOrder('washing')">Approve ₹${updatedPrice}</button>
                    <button class="btn-primary" style="flex:1; padding:10px; font-size:14px; background:white; color:#DC2626; border:1px solid #FECACA;" onclick="app.specialTreatmentCost=0; app.progressOrder('washing')">Decline</button>
                </div>
            </div>` : '';

        // Delivery delay banner (show only when out for delivery or delivered)
        const delayBanner = ['out_for_delivery', 'delivered'].includes(this.orderStatus) ? `
            <div style="background:#FEF3C7; padding:16px 20px; display:flex; gap:14px; align-items:flex-start; border-bottom:1px solid #FDE68A;">
                <div style="width:36px; height:36px; border-radius:50%; background:#FDE68A; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                    <i class="fa-solid fa-clock" style="color:#92400E;"></i>
                </div>
                <div style="flex:1;">
                    <div style="font-weight:700; font-size:14px; color:#78350F; margin-bottom:4px;">Delivery Delayed</div>
                    <div style="font-size:13px; color:#92400E; line-height:1.5;">Delayed by 45 mins due to heavy traffic. New ETA: <strong>7:15 PM</strong>.</div>
                </div>
            </div>` : '';

        // Notifications filtered to current progress
        const statusLevel = {
            weighing:0, collected:1, at_vendor:2,
            garment_issue:3, price_update:4,
            washing:5, drying:6, ironing:7,
            packed:8, out_for_delivery:9, delivered:10
        };
        const currentLevel = statusLevel[this.orderStatus] ?? 0;
        const allNotifs = [
            { level:1,  time:'10:30 AM', icon:'fa-motorcycle',         color:'#2563EB', text:'Pickup partner Ramesh Kumar assigned to your order.' },
            { level:1,  time:'11:00 AM', icon:'fa-bag-shopping',        color:'#16A34A', text:'Clothes collected from your address.' },
            { level:2,  time:'11:45 AM', icon:'fa-store',               color:'#16A34A', text:'Arrived at vendor. Processing started.' },
            { level:3,  time:'2:15 PM',  icon:'fa-triangle-exclamation',color:'#D97706', text:'Garment issue flagged — stain detected on silk shirt.' },
            { level:4,  time:'2:45 PM',  icon:'fa-file-invoice-dollar', color:'#D97706', text:'Price updated to ₹260. Awaiting your approval.' },
            { level:5,  time:'3:00 PM',  icon:'fa-droplet',             color:'#2563EB', text:'Washing started by vendor.' },
            { level:6,  time:'4:30 PM',  icon:'fa-wind',                color:'#6366F1', text:'Clothes drying in progress.' },
            { level:7,  time:'5:00 PM',  icon:'fa-shirt',               color:'#8B5CF6', text:'Ironing in progress.' },
            { level:8,  time:'5:45 PM',  icon:'fa-box',                 color:'#64748B', text:'Clothes packed and ready for dispatch.' },
            { level:9,  time:'6:00 PM',  icon:'fa-truck',               color:'#16A34A', text:'Out for delivery! Ramesh is on the way.' },
            { level:9,  time:'6:30 PM',  icon:'fa-clock',               color:'#B45309', text:'Delivery delayed 45 mins — heavy traffic. New ETA: 7:15 PM.' },
        ].filter(n => n.level <= currentLevel);
        const notifHTML = allNotifs.length === 0
            ? '<p style="color:var(--text-secondary); font-size:14px; padding:16px 0;">No updates yet. Confirm pickup to start tracking.</p>'
            : allNotifs.map(n => `
            <div style="display:flex; gap:14px; padding:14px 0; border-bottom:1px solid var(--border-color);">
                <div style="display:flex; flex-direction:column; align-items:center; gap:4px; flex-shrink:0; width:52px;">
                    <div style="width:32px; height:32px; border-radius:50%; background:${n.color}18; display:flex; align-items:center; justify-content:center;">
                        <i class="fa-solid ${n.icon}" style="color:${n.color}; font-size:13px;"></i>
                    </div>
                    <div style="font-size:11px; color:var(--text-secondary); font-weight:500;">${n.time}</div>
                </div>
                <div style="flex:1; padding-top:6px; font-size:14px; color:var(--text-primary); line-height:1.4;">${n.text}</div>
            </div>`).join('');

        return `
            ${delayBanner}
            <div class="page-header" style="background:var(--bg-card); position:sticky; top:0; z-index:10; border-bottom:1px solid var(--border-color);">
                <div style="font-weight:600; font-size:16px; flex:1; text-align:center;">Order Tracking</div>
                <button class="btn-icon" style="position:absolute; right:16px;" onclick="document.getElementById('notif-panel').classList.add('open')" title="Order Notifications">
                    <i class="fa-solid fa-bell"></i>
                    <span style="position:absolute; top:6px; right:6px; width:8px; height:8px; background:#EF4444; border-radius:50%; border:1.5px solid white;"></span>
                </button>
            </div>

            <div style="padding:20px; padding-bottom:40px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                    <div>
                        <div style="font-weight:700; font-size:18px;">Order #LDY-49281</div>
                        <div style="color:var(--text-secondary); font-size:14px;">${this.selectedVendor ? this.selectedVendor.name : 'Sparkle Clean Laundry'}</div>
                    </div>
                    <div style="background:${badgeBg}; color:${badgeColor}; padding:6px 12px; border-radius:16px; font-size:13px; font-weight:600;">
                        ${badgeLabel}
                    </div>
                </div>

                ${weighingAlert}
                ${garmentCard}
                ${priceCard}

                <div class="summary-section">
                    <div class="tracking-timeline">
                        ${stepsHTML}
                    </div>
                </div>

                <div class="summary-section">
                    <div style="display:flex; align-items:center; gap:16px; margin-bottom:16px;">
                        <div style="width:48px; height:48px; border-radius:50%; background:var(--accent-light); display:flex; align-items:center; justify-content:center; color:var(--accent); font-size:20px;">
                            <i class="fa-solid fa-motorcycle"></i>
                        </div>
                        <div style="flex:1;">
                            <div style="font-size:13px; color:var(--text-secondary);">Pickup & Delivery Partner</div>
                            <div style="font-weight:600; font-size:16px;">Ramesh Kumar</div>
                            <div style="font-size:13px; color:var(--text-secondary); margin-top:2px;">+91 98765 43210</div>
                        </div>
                        <a href="tel:+919876543210" class="btn-icon" style="background:#DCFCE7; color:#16A34A; text-decoration:none; display:flex; align-items:center; justify-content:center;"><i class="fa-solid fa-phone"></i></a>
                    </div>
                    <div style="border-top:1px dashed var(--border-color); padding-top:16px;">
                        <div style="font-size:13px; color:var(--text-secondary);">Estimated Delivery</div>
                        ${['out_for_delivery','delivered'].includes(this.orderStatus)
                            ? `<div style="font-weight:600;">Today, 7:15 PM – 8:00 PM
                                <span style="font-size:12px; font-weight:500; color:#B45309; background:#FEF3C7; padding:2px 8px; border-radius:20px; margin-left:6px;">Delayed</span>
                               </div>
                               <div style="font-size:12px; color:var(--text-secondary); margin-top:2px; text-decoration:line-through;">Original: 6:30 PM – 7:00 PM</div>`
                            : `<div style="font-weight:600;">Today, 6:30 PM – 7:00 PM</div>`}
                    </div>
                </div>

                ${this.orderStatus === 'delivered'
                    ? `<button class="btn-primary" style="width:100%; margin-bottom:12px; display:flex; align-items:center; justify-content:center; gap:8px;" onclick="app.navigate('payment')">
                        <i class="fa-solid fa-file-invoice"></i> View Invoice &amp; Pay
                       </button>`
                    : ''}

                <button class="btn-primary" style="width:100%; background:white; color:var(--text-primary); border:1px solid var(--border-color); display:flex; align-items:center; justify-content:center; gap:8px; margin-top:4px;" onclick="document.getElementById('report-issue-form').style.display='block'; document.getElementById('report-issue-success').style.display='none'; document.getElementById('report-issue-modal').classList.add('open')">
                    <i class="fa-solid fa-circle-exclamation"></i> Report an Issue
                </button>

                <!-- Past Orders -->
                <div style="margin-top:28px;">
                    <div style="font-size:16px; font-weight:700; margin-bottom:14px; color:var(--text-primary);">Past Orders</div>
                    ${this.profile.orderHistory.map(o => `
                        <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:14px 16px; margin-bottom:10px; display:flex; align-items:center; gap:12px;">
                            <div style="width:38px; height:38px; border-radius:10px; background:var(--accent-light); display:flex; align-items:center; justify-content:center; color:var(--accent); flex-shrink:0;">
                                <i class="fa-solid fa-jug-detergent" style="font-size:15px;"></i>
                            </div>
                            <div style="flex:1; min-width:0;">
                                <div style="font-weight:600; font-size:14px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${o.vendor}</div>
                                <div style="font-size:12px; color:var(--text-secondary); margin-top:2px;">${o.date} · <strong style="color:var(--text-primary);">₹${o.total}</strong></div>
                            </div>
                            <div style="display:flex; flex-direction:column; align-items:flex-end; gap:6px; flex-shrink:0;">
                                <span style="background:var(--accent-light); color:var(--accent); font-size:11px; font-weight:600; padding:2px 8px; border-radius:20px;">${o.status}</span>
                                <div style="font-size:11px; color:var(--text-secondary);">${o.id}</div>
                            </div>
                        </div>`).join('')}
                </div>
            </div>

            <!-- Notifications Panel -->
            <div id="notif-panel" class="modal-overlay" onclick="if(event.target===this) this.classList.remove('open')">
                <div class="modal-content" style="max-height:80vh; overflow-y:auto;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                        <h3 style="font-size:18px; font-weight:700; margin:0;">Order Updates</h3>
                        <button class="btn-icon" onclick="document.getElementById('notif-panel').classList.remove('open')"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div style="font-size:13px; color:var(--text-secondary); margin-bottom:8px;">Order #LDY-49281 · ${this.selectedVendor ? this.selectedVendor.name : 'Sparkle Clean Laundry'}</div>
                    <div>${notifHTML}</div>
                </div>
            </div>

            <!-- Report Issue Modal -->
            <div id="report-issue-modal" class="modal-overlay" onclick="if(event.target===this) this.classList.remove('open')">
                <div class="modal-content">
                    <div id="report-issue-form">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                            <h3 style="font-size:18px; font-weight:700; margin:0;">Report an Issue</h3>
                            <button class="btn-icon" onclick="document.getElementById('report-issue-modal').classList.remove('open')"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        <div class="input-group" style="margin-bottom:16px; text-align:left;">
                            <label style="display:block; margin-bottom:8px; font-size:13px; color:var(--text-secondary);">Issue Type</label>
                            <select id="report-issue-type" style="width:100%; padding:12px; border:1px solid var(--border-color); border-radius:var(--radius-md); background:white; font-family:inherit;">
                                <option>Delay in pickup/delivery</option>
                                <option>Missing items</option>
                                <option>Damaged garments</option>
                                <option>Payment issue</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div class="input-group" style="margin-bottom:16px; text-align:left;">
                            <label style="display:block; margin-bottom:8px; font-size:13px; color:var(--text-secondary);">Description</label>
                            <textarea id="report-issue-desc" rows="4" style="width:100%; padding:12px; border:1px solid var(--border-color); border-radius:var(--radius-md); background:white; resize:none; font-family:inherit;" placeholder="Please describe the issue in detail..."></textarea>
                        </div>
                        <div class="input-group" style="margin-bottom:24px; text-align:left;">
                            <label style="display:block; margin-bottom:8px; font-size:13px; color:var(--text-secondary);">Attach Photo (Optional)</label>
                            <label style="border:1px dashed var(--border-color); border-radius:var(--radius-md); padding:20px; text-align:center; background:var(--bg-card); cursor:pointer; display:block;">
                                <input type="file" accept="image/*" style="display:none;" onchange="document.getElementById('photo-label').textContent=this.files[0]?this.files[0].name:'Tap to upload photo'">
                                <i class="fa-solid fa-cloud-arrow-up" style="font-size:24px; color:var(--text-secondary); margin-bottom:8px; display:block;"></i>
                                <div id="photo-label" style="font-size:14px; color:var(--text-primary); font-weight:500;">Tap to upload photo</div>
                            </label>
                        </div>
                        <button class="btn-primary" style="width:100%;" onclick="app.submitIssueReport()">Submit Report</button>
                    </div>
                    <div id="report-issue-success" style="display:none; text-align:center; padding:12px 0 8px;">
                        <div style="width:64px; height:64px; background:#F0FDF4; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px; font-size:28px; color:#16A34A;">
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <h3 style="font-size:18px; font-weight:700; margin-bottom:8px;">Issue Reported!</h3>
                        <p style="font-size:14px; color:var(--text-secondary); line-height:1.5; margin-bottom:24px;">Our support team will review your complaint and reach out within 2 hours.</p>
                        <div style="background:var(--bg-main); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:14px 16px; text-align:left; margin-bottom:24px;">
                            <div style="font-size:12px; color:var(--text-secondary); margin-bottom:4px;">Ticket ID</div>
                            <div style="font-weight:700; color:var(--primary); font-size:16px;" id="report-ticket-id">#TKT-00000</div>
                        </div>
                        <button class="btn-primary" style="width:100%;" onclick="document.getElementById('report-issue-modal').classList.remove('open')">Done</button>
                    </div>
                </div>
            </div>
        `;
    },

    confirmPickup() {
        this.confirmedPrice = this.getCartTotal();
        this.specialTreatmentCost = 0;
        this.orderStatus = 'collected';
        if (this.currentView === 'orders') this.navigate('orders');
        this.scheduleOrderProgress('at_vendor', 10000);
    },

    scheduleOrderProgress(nextStatus, delay) {
        if (this.orderTimer) clearTimeout(this.orderTimer);
        this.orderTimer = setTimeout(() => { this.progressOrder(nextStatus); }, delay);
    },

    buildOrderSteps() {
        const services = this.orderedServices.length > 0 ? this.orderedServices :
            (this.selectedVendor ? this.selectedVendor.serviceList.filter(s => this.cart[s.id] > 0).map(s => s.name) : ['Basic Wash']);

        const hasWash = services.some(s => ['Basic Wash', 'Dry Clean', 'Wedding Wear'].includes(s));
        const hasShoe = services.includes('Shoe Wash');
        const needsDrying = services.some(s => ['Basic Wash', 'Wedding Wear'].includes(s));
        const needsIroning = services.some(s => ['Ironing', 'Basic Wash', 'Wedding Wear'].includes(s));

        const steps = [
            { label: 'Clothes Collected',   time: 'Today, 9:00 AM',  key: 'collected' },
            { label: 'Arrived at Vendor',   time: 'Today, 9:45 AM',  key: 'at_vendor' },
        ];

        if (hasWash) {
            const washLabel = (services.includes('Dry Clean') && !services.includes('Basic Wash')) ? 'Dry Cleaning in Progress' : 'Washing in Progress';
            steps.push({ label: washLabel, time: 'Today, 10:15 AM', key: 'washing' });
        }
        if (hasShoe && !hasWash) {
            steps.push({ label: 'Shoe Cleaning in Progress', time: 'Today, 10:15 AM', key: 'washing' });
        }
        if (needsDrying) {
            steps.push({ label: 'Drying', time: '', key: 'drying' });
        }
        if (needsIroning) {
            steps.push({ label: 'Ironing', time: '', key: 'ironing' });
        }

        steps.push({ label: 'Packed',           time: '', key: 'packed' });
        steps.push({ label: 'Out for Delivery', time: '', key: 'out_for_delivery' });
        steps.push({ label: 'Delivered',         time: '', key: 'delivered' });
        return steps;
    },

    progressOrder(status) {
        this.orderStatus = status;
        if (this.currentView === 'orders') this.navigate('orders');

        const services = this.orderedServices.length > 0 ? this.orderedServices :
            (this.selectedVendor ? this.selectedVendor.serviceList.filter(s => this.cart[s.id] > 0).map(s => s.name) : ['Basic Wash']);
        const hasWash = services.some(s => ['Basic Wash', 'Dry Clean', 'Wedding Wear', 'Shoe Wash'].includes(s));
        const needsDrying = services.some(s => ['Basic Wash', 'Wedding Wear'].includes(s));
        const needsIroning = services.some(s => ['Ironing', 'Basic Wash', 'Wedding Wear'].includes(s));

        const afterWash = needsDrying ? 'drying' : needsIroning ? 'ironing' : 'packed';
        const afterDry  = needsIroning ? 'ironing' : 'packed';
        const afterVendor = hasWash ? 'garment_issue' : needsIroning ? 'ironing' : 'packed';

        const next = {
            at_vendor:      afterVendor,
            garment_issue:  this.garmentDecision === 'declined' ? 'washing' : 'price_update',
            price_update:   'washing',
            washing:        afterWash,
            drying:         afterDry,
            ironing:        'packed',
            packed:         'out_for_delivery',
            out_for_delivery: 'delivered'
        };
        if (next[status]) this.scheduleOrderProgress(next[status], 10000);
    },

    validatePhone() {
        const input = document.getElementById('phone-input');
        const error = document.getElementById('phone-error');
        const container = document.getElementById('phone-container');
        if (!input || !error) return;
        const val = input.value.replace(/[^0-9]/g, '');
        if (val.length !== 10) {
            error.style.display = 'flex';
            container.style.borderColor = 'var(--danger)';
            container.style.boxShadow = '0 0 0 3px #FEE2E2';
            return;
        }
        error.style.display = 'none';
        container.style.borderColor = 'var(--border-color)';
        container.style.boxShadow = 'none';
        this.enteredPhone = '+91 ' + val;
        this.navigate('location');
    },

    renderLogin() {
        return `
            <div class="auth-container">
                <div style="text-align:center; margin-bottom:40px;">
                    <div style="width:72px; height:72px; background:var(--primary); border-radius:20px; display:flex; align-items:center; justify-content:center; margin:0 auto 16px;">
                        <i class="fa-solid fa-jug-detergent" style="font-size:36px; color:white;"></i>
                    </div>
                    <h1 class="auth-title">LaundryHub</h1>
                    <p class="auth-subtitle">Clean clothes, delivered to your door.</p>
                </div>

                <div class="input-group">
                    <label>Phone Number</label>
                    <div id="phone-container" style="display:flex; align-items:center; border:1px solid var(--border-color); border-radius:var(--radius-md); background:var(--bg-main); overflow:hidden; transition:border-color 0.2s, box-shadow 0.2s;">
                        <div style="padding:14px 14px; background:#F1F5F9; color:var(--text-secondary); font-size:15px; font-weight:600; border-right:1px solid var(--border-color); white-space:nowrap; flex-shrink:0;">+91</div>
                        <input type="tel" id="phone-input" placeholder="10-digit number" maxlength="10"
                            style="flex:1; padding:14px 16px; border:none; background:transparent; font-size:15px; font-family:inherit; outline:none;"
                            oninput="this.value=this.value.replace(/[^0-9]/g,''); if(this.value.length===10){ document.getElementById('phone-error').style.display='none'; document.getElementById('phone-container').style.borderColor='var(--border-color)'; document.getElementById('phone-container').style.boxShadow='none'; }"
                            onkeydown="if(event.key==='Enter') app.validatePhone()">
                    </div>
                    <div id="phone-error" style="display:none; color:var(--danger); font-size:13px; margin-top:8px; align-items:center; gap:6px; background:#FFF1F2; border:1px solid #FECDD3; border-radius:8px; padding:8px 12px;">
                        <i class="fa-solid fa-circle-exclamation"></i> Please enter a valid phone number
                    </div>
                </div>

                <button class="btn-primary" style="margin-top:24px;" onclick="app.validatePhone()">
                    Get OTP
                </button>

                <div class="divider">OR</div>

                <button class="btn-primary" style="background:white; color:var(--text-primary); border:1px solid var(--border-color); display:flex; align-items:center; justify-content:center; gap:12px;" onclick="app.navigate('googleLogin')">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" width="18" height="18" alt="G">
                    Continue with Google
                </button>

                <p style="text-align:center; margin-top:28px; font-size:12px; color:var(--text-tertiary); line-height:1.6;">
                    By continuing, you agree to our <span style="color:var(--primary); cursor:pointer;">Terms of Service</span> and <span style="color:var(--primary); cursor:pointer;">Privacy Policy</span>
                </p>
            </div>
        `;
    },

    renderGoogleLogin() {
        return `
            <div style="min-height:100%; background:#fff; display:flex; flex-direction:column;">
                <!-- Top bar -->
                <div style="padding:14px 16px; display:flex; align-items:center; gap:12px; border-bottom:1px solid #E8EAED;">
                    <button onclick="app.navigate('login')" style="background:none; border:none; cursor:pointer; padding:4px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#5F6368;">
                        <i class="fa-solid fa-arrow-left" style="font-size:16px;"></i>
                    </button>
                    <div style="display:flex; align-items:center; gap:6px; flex:1;">
                        <div style="width:14px; height:14px; border-radius:50%; background:#4285F4; display:flex; align-items:center; justify-content:center;">
                            <i class="fa-solid fa-lock" style="font-size:7px; color:white;"></i>
                        </div>
                        <span style="font-size:12px; color:#5F6368; font-family:inherit;">accounts.google.com</span>
                    </div>
                </div>

                <div style="flex:1; padding:32px 24px; display:flex; flex-direction:column; align-items:center;">
                    <!-- Google logo -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 92" width="80" style="margin-bottom:24px;">
                        <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                        <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                        <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
                        <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
                        <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
                        <path fill="#4285F4" d="M35.29 41.41V32h31.91c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.74.36 15.59 16.32.13 35.5.13c10.49 0 17.94 4.12 23.54 9.49l-6.64 6.64c-4.01-3.78-9.45-6.72-16.9-6.72-13.78 0-24.56 11.1-24.56 24.9 0 13.8 10.78 24.9 24.56 24.9 8.94 0 14.03-3.61 17.3-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.61.01z"/>
                    </svg>

                    <h2 style="font-size:24px; font-weight:400; color:#202124; margin-bottom:8px; font-family:inherit;">Sign in</h2>
                    <p style="font-size:16px; color:#202124; margin-bottom:28px; font-family:inherit;">to continue to <strong>LaundryHub</strong></p>

                    <!-- Email field -->
                    <div style="width:100%; margin-bottom:20px; position:relative;">
                        <input type="email" id="google-email" placeholder=" "
                            style="width:100%; padding:16px 14px 8px; border:1px solid #DADCE0; border-radius:4px; font-size:16px; font-family:inherit; outline:none; background:white; color:#202124; box-sizing:border-box;"
                            onfocus="this.style.borderColor='#4285F4'; this.style.boxShadow='0 0 0 2px rgba(66,133,244,0.3)'; document.getElementById('email-label').style.color='#4285F4';"
                            onblur="this.style.borderColor='#DADCE0'; this.style.boxShadow='none'; document.getElementById('email-label').style.color='#5F6368';">
                        <label id="email-label" style="position:absolute; left:14px; top:50%; transform:translateY(-50%); font-size:16px; color:#5F6368; pointer-events:none; transition:all 0.15s; font-family:inherit; background:white; padding:0 2px;"
                            onclick="document.getElementById('google-email').focus()">Email or phone</label>
                    </div>

                    <p style="font-size:14px; color:#5F6368; margin-bottom:28px; text-align:left; width:100%; line-height:1.5; font-family:inherit;">
                        Not your computer? Use a Private Window to sign in.
                        <span style="color:#4285F4; cursor:pointer;">Learn more</span>
                    </p>

                    <div style="display:flex; justify-content:space-between; align-items:center; width:100%; margin-top:auto;">
                        <span style="color:#4285F4; font-size:14px; font-weight:500; cursor:pointer; font-family:inherit;">Create account</span>
                        <button onclick="app.enteredPhone = app.enteredPhone || 'Google Account'; app.navigate('location')"
                            style="background:#4285F4; color:white; border:none; border-radius:4px; padding:10px 24px; font-size:14px; font-weight:500; font-family:inherit; cursor:pointer; letter-spacing:0.25px; transition:background 0.2s;"
                            onmouseover="this.style.background='#3367D6'"
                            onmouseout="this.style.background='#4285F4'">
                            Next
                        </button>
                    </div>
                </div>

                <!-- Footer -->
                <div style="padding:16px 24px; border-top:1px solid #E8EAED; display:flex; justify-content:space-between; align-items:center;">
                    <select style="border:none; background:none; font-size:12px; color:#5F6368; font-family:inherit; cursor:pointer; outline:none;">
                        <option>English (India)</option>
                    </select>
                    <div style="display:flex; gap:16px; font-size:12px; color:#5F6368;">
                        <span style="cursor:pointer;">Help</span>
                        <span style="cursor:pointer;">Privacy</span>
                        <span style="cursor:pointer;">Terms</span>
                    </div>
                </div>
            </div>
        `;
    },

    renderLocation() {
        return `
            <div class="location-container">
                <div class="icon-large">
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                
                <h2 class="location-title">Find nearby services</h2>
                <p class="location-desc">We need your location to show you the best laundry vendors and accurate pickup slots in your area.</p>
                
                <button class="btn-primary" style="margin-bottom:16px; display:flex; align-items:center; justify-content:center; gap:8px;" onclick="app.navigate('home')">
                    <i class="fa-solid fa-location-crosshairs"></i> Use Current Location
                </button>
                
                <div class="divider">OR</div>
                
                <div class="input-group" style="width:100%; text-align:left;">
                    <label>Enter Pincode / Area Code</label>
                    <div style="display:flex; gap:12px;">
                        <input type="text" class="input-field" placeholder="e.g. 560102" value="560102">
                        <button class="btn-primary" style="width:auto; padding:0 24px;" onclick="app.navigate('home')">
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    },
    
    renderCheckout() {
        if (this.bookingStep === 1) return this.renderCheckoutStep1();
        if (this.bookingStep === 2) return this.renderCheckoutStep2();
        if (this.bookingStep === 3) return this.renderCheckoutStep3();
        if (this.bookingStep === 4) return this.renderCheckoutSuccess();
    },

    renderCheckoutStep1() {
        let v = this.selectedVendor;
        let servicesHTML = v.serviceList.map(s => `
            <div class="service-item" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <div class="service-info" style="flex:1; margin-right:12px;">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:4px;">
                        <h4 style="font-size:15px; margin:0;">${s.name}</h4>
                        <div class="service-price" style="font-weight:700; color:var(--primary); font-size:14px;">₹${s.price}/${s.unit}</div>
                    </div>
                </div>
                <div class="qty-control">
                    <button class="qty-btn" onclick="app.updateCart('${s.id}', -1)"><i class="fa-solid fa-minus"></i></button>
                    <span class="qty-val" id="qty-${s.id}">${this.cart[s.id] || 0}</span>
                    <button class="qty-btn" onclick="app.updateCart('${s.id}', 1)"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        `).join('');

        let total = this.getCartTotal();
        let estRange = total > 0 ? `₹${Math.floor(total * 0.9)} – ₹${Math.floor(total * 1.2)}` : '₹0';

        return `
            <div class="page-header" style="background:var(--bg-card); position:sticky; top:0; z-index:10; border-bottom:1px solid var(--border-color);">
                <button class="btn-icon" onclick="app.navigate('vendor', '${v.id}')"><i class="fa-solid fa-arrow-left"></i></button>
                <div style="font-weight:600; font-size:16px; flex:1; text-align:center;">Step 1: Service & Quantity</div>
                <div style="width:40px;"></div>
            </div>
            
            <div style="padding:20px; padding-bottom:100px;">
                <h3 style="margin-bottom:16px; font-size:18px;">Select Services</h3>
                <div style="display:flex; flex-direction:column;">
                    ${servicesHTML}
                </div>
                
                <div style="background:var(--primary-light); padding:16px; border-radius:12px; margin-top:12px; border:1px solid #BFDBFE;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <div style="color:var(--primary); font-weight:600;">Subtotal</div>
                        <div style="color:var(--primary); font-weight:700; font-size:18px;" id="checkout-subtotal">₹${total}</div>
                    </div>
                    <div style="font-size:13px; color:var(--text-secondary); line-height:1.4;">
                        Estimated price range: <strong style="color:var(--text-primary);" id="checkout-est">${estRange}</strong>
                        <div style="margin-top:4px; color:var(--warning); display:flex; gap:6px; align-items:flex-start;">
                            <i class="fa-solid fa-circle-info" style="margin-top:2px;"></i>
                            Exact price confirmed after weighing at pickup.
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="bottom-action-bar">
                <button id="step1-next" class="btn-primary" onclick="app.bookingStep=2; app.navigate('checkout')" ${total === 0 ? 'style="opacity:0.5;pointer-events:none;"' : ''}>Next: Select Pickup Slot</button>
            </div>
        `;
    },

    renderCheckoutStep2() {
        let dates = ['Today', 'Tomorrow', 'Day After'];
        let slots = ['9–11 AM', '2–4 PM', '5–7 PM'];
        
        let dateHTML = dates.map(d => `
            <div class="slot-chip ${this.bookingDate === d ? 'selected' : ''}" onclick="app.bookingDate='${d}'; app.navigate('checkout')">${d}</div>
        `).join('');
        
        let timeHTML = slots.map(t => `
            <div class="slot-chip ${this.bookingTime === t ? 'selected' : ''}" onclick="app.bookingTime='${t}'; app.navigate('checkout')">${t}</div>
        `).join('');

        return `
            <div class="page-header" style="background:var(--bg-card); position:sticky; top:0; z-index:10; border-bottom:1px solid var(--border-color);">
                <button class="btn-icon" onclick="app.bookingStep=1; app.navigate('checkout')"><i class="fa-solid fa-arrow-left"></i></button>
                <div style="font-weight:600; font-size:16px; flex:1; text-align:center;">Step 2: Pickup Slot</div>
                <div style="width:40px;"></div>
            </div>
            
            <div style="padding:20px; padding-bottom:100px;">
                <h3 style="margin-bottom:16px; font-size:18px;">Select Date</h3>
                <div style="display:flex; gap:12px; margin-bottom:24px; overflow-x:auto;">
                    ${dateHTML}
                </div>
                
                <h3 style="margin-bottom:16px; font-size:18px;">Select Time</h3>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                    ${timeHTML}
                </div>
            </div>
            
            <div class="bottom-action-bar">
                <button class="btn-primary" onclick="app.bookingStep=3; app.navigate('checkout')" ${!this.bookingTime ? 'style="opacity:0.5;pointer-events:none;"' : ''}>Next: Order Summary</button>
            </div>
        `;
    },

    renderCheckoutStep3() {
        let v = this.selectedVendor;
        let total = this.getCartTotal();
        let estRange = total > 0 ? `₹${Math.floor(total * 0.9)} – ₹${Math.floor(total * 1.2)}` : '₹0';
        
        let cartItemsHTML = v.serviceList.filter(s => this.cart[s.id] > 0).map(s => `
            <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:14px;">
                <div>${this.cart[s.id]}x ${s.name}</div>
                <div style="font-weight:600;">₹${this.cart[s.id] * s.price}</div>
            </div>
        `).join('');

        return `
            <div class="page-header" style="background:var(--bg-card); position:sticky; top:0; z-index:10; border-bottom:1px solid var(--border-color);">
                <button class="btn-icon" onclick="app.bookingStep=2; app.navigate('checkout')"><i class="fa-solid fa-arrow-left"></i></button>
                <div style="font-weight:600; font-size:16px; flex:1; text-align:center;">Step 3: Summary</div>
                <div style="width:40px;"></div>
            </div>
            
            <div style="padding:20px; padding-bottom:120px; overflow-y:auto;">
                <!-- Vendor Info -->
                <div class="summary-section">
                    <div class="summary-header">
                        <h3>Vendor</h3>
                    </div>
                    <div style="display:flex; align-items:center; gap:12px;">
                        <div style="width:40px; height:40px; border-radius:8px; background:url('${v.photo}') center/cover;"></div>
                        <div style="font-weight:600;">${v.name}</div>
                    </div>
                </div>
                
                <!-- Services Info -->
                <div class="summary-section">
                    <div class="summary-header">
                        <h3>Services Selected</h3>
                        <a href="#" onclick="app.bookingStep=1; app.navigate('checkout')">Edit</a>
                    </div>
                    ${cartItemsHTML}
                    <div style="border-top:1px dashed var(--border-color); margin-top:12px; padding-top:12px; display:flex; justify-content:space-between; font-weight:700;">
                        <div>Estimated Total</div>
                        <div style="color:var(--primary);">${estRange}</div>
                    </div>
                    <div style="margin-top:8px; font-size:12px; color:var(--warning); display:flex; gap:6px; align-items:flex-start;">
                        <i class="fa-solid fa-circle-info" style="margin-top:2px;"></i>
                        Exact price confirmed after weighing at pickup.
                    </div>
                </div>
                
                <!-- Pickup Info -->
                <div class="summary-section">
                    <div class="summary-header">
                        <h3>Pickup Slot</h3>
                        <a href="#" onclick="app.bookingStep=2; app.navigate('checkout')">Edit</a>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px; font-size:14px;">
                        <i class="fa-regular fa-calendar" style="color:var(--text-secondary);"></i>
                        <span style="font-weight:500;">${this.bookingDate}, ${this.bookingTime}</span>
                    </div>
                </div>

                <!-- Address Info -->
                <div class="summary-section">
                    <div class="summary-header">
                        <h3>Pickup Address</h3>
                    </div>
                    <div style="display:flex; gap:10px; margin-bottom:12px;">
                        ${this.profile.addresses.map(a => `
                            <div class="addr-chip ${this.selectedAddressType === a.type ? 'selected' : ''}" onclick="app.selectedAddressType='${a.type}'; app.navigate('checkout')">
                                <i class="fa-solid ${a.type === 'Home' ? 'fa-house' : 'fa-briefcase'}"></i> ${a.type}
                            </div>
                        `).join('')}
                    </div>
                    <div style="font-size:13px; color:var(--text-secondary); line-height:1.5;">
                        ${this.profile.addresses.find(a => a.type === this.selectedAddressType)?.line || ''}
                    </div>
                </div>

                <!-- Payment Method -->
                <div class="summary-section">
                    <div class="summary-header">
                        <h3>Payment Method</h3>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:12px;">
                        <label style="display:flex; align-items:center; gap:12px; padding:12px; border:1px solid var(--border-color); border-radius:var(--radius-md); ${this.paymentMethod === 'UPI' ? 'border-color:var(--primary); background:var(--primary-light);' : ''}; cursor:pointer;">
                            <input type="radio" name="payment" ${this.paymentMethod === 'UPI' ? 'checked' : ''} onclick="app.paymentMethod='UPI'; app.navigate('checkout')">
                            <div style="font-weight:500;">UPI (GPay, PhonePe)</div>
                        </label>
                        <label style="display:flex; align-items:center; gap:12px; padding:12px; border:1px solid var(--border-color); border-radius:var(--radius-md); ${this.paymentMethod === 'Cash' ? 'border-color:var(--primary); background:var(--primary-light);' : ''}; cursor:pointer;">
                            <input type="radio" name="payment" ${this.paymentMethod === 'Cash' ? 'checked' : ''} onclick="app.paymentMethod='Cash'; app.navigate('checkout')">
                            <div style="font-weight:500;">Cash on Delivery</div>
                        </label>
                    </div>
                </div>
            </div>
            
            <div class="bottom-action-bar">
                <button class="btn-primary" onclick="app.orderedServices=app.selectedVendor.serviceList.filter(s=>app.cart[s.id]>0).map(s=>s.name); app.bookingStep=4; app.navigate('checkout')">Confirm Order</button>
            </div>
        `;
    },

    renderGarmentIssue() {
        // Start 2-hour countdown from a fixed time for demo
        const countdownEndMs = Date.now() + (1 * 60 * 60 * 1000) + (23 * 60 * 1000); // ~1h 23m remaining demo

        return `
            <div class="page-header" style="background:var(--bg-card); position:sticky; top:0; z-index:10; border-bottom:1px solid var(--border-color);">
                <button class="btn-icon" onclick="app.navigate('orders')"><i class="fa-solid fa-arrow-left"></i></button>
                <div style="font-weight:600; font-size:16px; flex:1; text-align:center;">Garment Issue</div>
                <div style="width:40px;"></div>
            </div>

            <!-- Countdown banner -->
            <div style="background:#FFF1F2; border-bottom:1px solid #FECDD3; padding:10px 20px; display:flex; justify-content:space-between; align-items:center;">
                <div style="font-size:13px; color:#BE123C; font-weight:500;">
                    <i class="fa-solid fa-hourglass-half" style="margin-right:6px;"></i> Please respond within
                </div>
                <div id="garment-countdown" style="font-size:15px; font-weight:700; color:#BE123C; font-variant-numeric:tabular-nums;">1:23:00</div>
            </div>

            <div style="padding:20px; padding-bottom:120px;">
                <!-- Garment photo with highlight -->
                <div style="position:relative; border-radius:var(--radius-md); overflow:hidden; margin-bottom:20px; box-shadow:var(--shadow-md);">
                    <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&h=400&q=80" 
                         style="width:100%; height:220px; object-fit:cover; display:block;" alt="Garment with issue">
                    <!-- Highlight circle overlay -->
                    <div style="position:absolute; top:35%; left:55%; width:60px; height:60px; border-radius:50%; border:3px solid #EF4444; box-shadow:0 0 0 4px rgba(239,68,68,0.25); pointer-events:none;"></div>
                    <div style="position:absolute; top:35%; left:55%; transform:translate(64px, 8px);">
                        <div style="background:#EF4444; color:white; font-size:11px; font-weight:700; padding:4px 8px; border-radius:6px; white-space:nowrap;">Stain detected</div>
                    </div>
                    <div style="position:absolute; bottom:0; left:0; right:0; padding:12px 16px; background:linear-gradient(transparent, rgba(0,0,0,0.6))">
                        <div style="color:white; font-size:13px; font-weight:600;">Silk Saree — Light Blue</div>
                    </div>
                </div>

                <!-- Issue description from vendor -->
                <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:16px; margin-bottom:20px;">
                    <div style="display:flex; gap:10px; align-items:flex-start; margin-bottom:12px;">
                        <div style="width:36px; height:36px; border-radius:50%; background:url('https://ui-avatars.com/api/?name=Sparkle&background=EFF6FF&color=2563EB') center/cover; flex-shrink:0;"></div>
                        <div>
                            <div style="font-weight:600; font-size:14px;">${this.selectedVendor ? this.selectedVendor.name : 'Sparkle Clean Laundry'}</div>
                            <div style="font-size:12px; color:var(--text-secondary);">Vendor note · 2:15 PM</div>
                        </div>
                    </div>
                    <p style="font-size:14px; color:var(--text-primary); line-height:1.6; margin:0;">
                        We noticed a <strong>light oil stain</strong> near the pallu of your silk saree (highlighted in red above). Standard wash may not fully remove this. We recommend a <strong>specialist solvent treatment</strong> which works best on silk fibres without damaging the weave.
                    </p>
                </div>

                <!-- Treatment details -->
                <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:16px; margin-bottom:24px;">
                    <div style="font-weight:600; font-size:15px; margin-bottom:12px;">Special Treatment Details</div>
                    <div style="display:flex; justify-content:space-between; font-size:14px; margin-bottom:8px;">
                        <span style="color:var(--text-secondary);">Treatment type</span>
                        <span style="font-weight:500;">Solvent stain removal</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:14px; margin-bottom:8px;">
                        <span style="color:var(--text-secondary);">Extra time required</span>
                        <span style="font-weight:500;">+4 hours</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:14px; margin-bottom:8px;">
                        <span style="color:var(--text-secondary);">Additional cost</span>
                        <span style="font-weight:700; color:var(--primary);">+₹50</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:14px;">
                        <span style="color:var(--text-secondary);">Success rate</span>
                        <span style="color:#16A34A; font-weight:600;">92% for this stain type</span>
                    </div>
                </div>
            </div>

            <div class="bottom-action-bar" style="flex-direction:column; gap:12px; padding:16px 20px 28px;">
                <button class="btn-primary" style="width:100%; display:flex; align-items:center; justify-content:center; gap:8px;" onclick="app.garmentDecision='approved'; app.specialTreatmentCost=50; app.progressOrder('price_update'); app.navigate('orders')">
                    <i class="fa-solid fa-check"></i> Approve Special Treatment (+₹50)
                </button>
                <button class="btn-primary" style="width:100%; background:white; color:var(--text-primary); border:1px solid var(--border-color); display:flex; align-items:center; justify-content:center; gap:8px;" onclick="app.garmentDecision='declined'; app.progressOrder('washing'); app.navigate('orders')">
                    Decline — Proceed with Standard Wash
                </button>
            </div>

            <script>
                (function() {
                    const end = ${countdownEndMs};
                    function tick() {
                        const now = Date.now();
                        let rem = Math.max(0, Math.floor((end - now) / 1000));
                        const h = Math.floor(rem / 3600);
                        const m = Math.floor((rem % 3600) / 60);
                        const s = rem % 60;
                        const el = document.getElementById('garment-countdown');
                        if (el) {
                            el.textContent = h + ':' + String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
                            if (rem > 0) setTimeout(tick, 1000);
                            else el.style.color = '#6B7280';
                        }
                    }
                    tick();
                })();
            <\/script>
        `;
    },

    renderPayment() {
        let v = this.selectedVendor;
        let subtotal = this.getCartTotal();
        
        let cartItemsHTML = '';
        if (v && subtotal > 0) {
            cartItemsHTML = v.serviceList.filter(s => this.cart[s.id] > 0).map(s => `
                <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:14px;">
                    <div style="color:var(--text-secondary);">${this.cart[s.id]}x ${s.name} (@ ₹${s.price}/${s.unit})</div>
                    <div style="font-weight:600;">₹${this.cart[s.id] * s.price}</div>
                </div>
            `).join('');
        } else {
            // Mock data if cart is empty but user navigates here
            cartItemsHTML = `
                <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:14px;">
                    <div style="color:var(--text-secondary);">2x Basic Wash (@ ₹10/piece)</div>
                    <div style="font-weight:600;">₹20</div>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:14px;">
                    <div style="color:var(--text-secondary);">1x Premium Wash (Silk)</div>
                    <div style="font-weight:600;">₹150</div>
                </div>
            `;
            subtotal = 170;
        }

        let serviceFee = 20;
        let deliveryFee = 30;
        let tax = Math.floor(subtotal * 0.05);
        let finalTotal = subtotal + serviceFee + deliveryFee + tax;

        return `
            <div class="page-header" style="background:var(--bg-card); position:sticky; top:0; z-index:10; border-bottom:1px solid var(--border-color);">
                <button class="btn-icon" onclick="app.navigate('orders')"><i class="fa-solid fa-arrow-left"></i></button>
                <div style="font-weight:600; font-size:16px; flex:1; text-align:center;">Final Payment</div>
                <div style="width:40px;"></div>
            </div>
            
            <div style="padding:20px; padding-bottom:120px;">
                <h2 style="font-size:24px; font-weight:700; margin-bottom:8px;">₹${finalTotal}</h2>
                <p style="color:var(--text-secondary); margin-bottom:24px;">Due for Order #LDY-49281</p>
                
                <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:20px; margin-bottom:24px;">
                    <div style="font-weight:600; font-size:16px; margin-bottom:16px;">Price Breakdown</div>
                    
                    ${cartItemsHTML}
                    
                    <div style="border-top:1px dashed var(--border-color); margin:16px 0;"></div>
                    
                    <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:14px;">
                        <div style="color:var(--text-secondary);">Subtotal</div>
                        <div style="font-weight:600;">₹${subtotal}</div>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:14px;">
                        <div style="color:var(--text-secondary);">Service Fee</div>
                        <div style="font-weight:600;">₹${serviceFee}</div>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:14px;">
                        <div style="color:var(--text-secondary);">Delivery Fee</div>
                        <div style="font-weight:600;">₹${deliveryFee}</div>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:14px;">
                        <div style="color:var(--text-secondary);">Taxes (5%)</div>
                        <div style="font-weight:600;">₹${tax}</div>
                    </div>
                    
                    <div style="border-top:1px solid var(--border-color); margin:16px 0; padding-top:16px; display:flex; justify-content:space-between; align-items:center;">
                        <div style="font-weight:700; font-size:16px;">Total to Pay</div>
                        <div style="font-weight:700; font-size:18px; color:var(--primary);">₹${finalTotal}</div>
                    </div>
                </div>

                <div style="font-weight:600; font-size:16px; margin-bottom:16px;">Select Payment Method</div>
                <div style="display:flex; flex-direction:column; gap:12px;">
                    <label style="display:flex; align-items:center; gap:12px; padding:16px; border:1px solid var(--primary); background:var(--primary-light); border-radius:var(--radius-md); cursor:pointer;">
                        <input type="radio" name="pay-method" checked>
                        <div style="flex:1;">
                            <div style="font-weight:600;">UPI</div>
                            <div style="font-size:12px; color:var(--text-secondary);">Google Pay, PhonePe, Paytm</div>
                        </div>
                        <i class="fa-solid fa-building-columns" style="color:var(--primary); font-size:20px;"></i>
                    </label>
                    <label style="display:flex; align-items:center; gap:12px; padding:16px; border:1px solid var(--border-color); background:var(--bg-card); border-radius:var(--radius-md); cursor:pointer;">
                        <input type="radio" name="pay-method">
                        <div style="flex:1;">
                            <div style="font-weight:600;">Credit/Debit Card</div>
                            <div style="font-size:12px; color:var(--text-secondary);">Visa, Mastercard, RuPay</div>
                        </div>
                        <i class="fa-regular fa-credit-card" style="color:var(--text-secondary); font-size:20px;"></i>
                    </label>
                </div>
            </div>
            
            <div class="bottom-action-bar">
                <button class="btn-primary" onclick="if(app.orderTimer) clearTimeout(app.orderTimer); app.orderPaid = true; app.orderStatus = 'paid'; app.navigate('orders')" style="display:flex; align-items:center; justify-content:center; gap:8px;"><i class="fa-solid fa-lock"></i> Pay ₹${finalTotal}</button>
            </div>
        `;
    },

    toggleNotif(key) {
        this.profile.notifications[key] = !this.profile.notifications[key];
        const track = document.getElementById('notif-track-' + key);
        const inp = document.getElementById('notif-inp-' + key);
        if (!track || !inp) return;
        inp.checked = this.profile.notifications[key];
        track.style.background = this.profile.notifications[key] ? 'var(--accent)' : 'var(--border-color)';
        track.querySelector('.toggle-thumb').style.transform = this.profile.notifications[key] ? 'translateX(20px)' : '';
    },

    toggleFaq(el) {
        const item = el.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(f => f.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
    },

    copyReferral() {
        navigator.clipboard?.writeText(this.profile.referralCode).catch(() => {});
        const btn = document.getElementById('copy-referral-btn');
        if (btn) { btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!'; setTimeout(() => { btn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy'; }, 2000); }
    },

    renderProfile() {
        const p = this.profile;

        const addressRows = p.addresses.map(a => `
            <div class="profile-row">
                <div class="profile-row-icon" style="background:${a.type === 'Home' ? 'var(--primary-light)' : '#F0FDF4'}; color:${a.type === 'Home' ? 'var(--primary)' : 'var(--accent)'};">
                    <i class="fa-solid ${a.type === 'Home' ? 'fa-house' : 'fa-briefcase'}"></i>
                </div>
                <div class="profile-row-body">
                    <div class="profile-row-label">${a.type}</div>
                    <div class="profile-row-sub">${a.line}</div>
                </div>
                <button class="profile-link-btn" onclick="alert('Edit ${a.type} address (prototype)')">Edit</button>
            </div>
        `).join('');

        const orderRows = p.orderHistory.map(o => `
            <div class="profile-row" style="align-items:flex-start;">
                <div class="profile-row-icon" style="background:var(--accent-light); color:var(--accent); margin-top:2px;">
                    <i class="fa-solid fa-jug-detergent"></i>
                </div>
                <div class="profile-row-body">
                    <div class="profile-row-label">${o.vendor}</div>
                    <div class="profile-row-sub">${o.date} · <strong style="color:var(--text-primary);">₹${o.total}</strong></div>
                    <div style="display:inline-block; margin-top:4px; background:var(--accent-light); color:var(--accent); font-size:11px; font-weight:600; padding:2px 8px; border-radius:9999px;">${o.status}</div>
                </div>
                <button class="profile-link-btn" style="margin-top:2px;" onclick="app.reorder('${o.id}')">Reorder</button>
            </div>
        `).join('');

        const paymentRows = p.paymentMethods.map(m => `
            <div class="profile-row">
                <div class="profile-row-icon" style="background:var(--primary-light); color:var(--primary);">
                    <i class="fa-solid ${m.icon}"></i>
                </div>
                <div class="profile-row-body">
                    <div class="profile-row-label">${m.label}</div>
                    <div class="profile-row-sub">${m.type === 'upi' ? 'UPI' : m.brand + ' Card'}</div>
                </div>
                <button class="profile-link-btn" style="color:var(--danger);" onclick="alert('Remove payment method (prototype)')">Remove</button>
            </div>
        `).join('');

        const notifRows = [
            { key: 'orderUpdates', label: 'Order updates', sub: 'Pickup, washing, delivery status' },
            { key: 'delayAlerts', label: 'Delay alerts', sub: 'Notified if your order is delayed' },
            { key: 'promotional', label: 'Promotional offers', sub: 'Deals, discounts & referral rewards' }
        ].map(n => `
            <div class="profile-row">
                <div class="profile-row-body">
                    <div class="profile-row-label">${n.label}</div>
                    <div class="profile-row-sub">${n.sub}</div>
                </div>
                <label class="toggle-switch" onclick="event.preventDefault(); app.toggleNotif('${n.key}')">
                    <input type="checkbox" id="notif-inp-${n.key}" ${p.notifications[n.key] ? 'checked' : ''}>
                    <div class="toggle-track" id="notif-track-${n.key}" style="background:${p.notifications[n.key] ? 'var(--accent)' : 'var(--border-color)'};">
                        <div class="toggle-thumb" style="transform:${p.notifications[n.key] ? 'translateX(20px)' : 'none'};"></div>
                    </div>
                </label>
            </div>
        `).join('');

        const faqs = [
            { q: 'How is the final price calculated?', a: 'The final price is based on the actual weight of your clothes measured at pickup. You get an estimate upfront and must approve before processing begins.' },
            { q: 'What if my clothes are damaged or lost?', a: 'All verified vendors are covered by our Garment Protection Policy. You can raise a dispute and receive compensation up to the vendor\'s declared limit.' },
            { q: 'Can I cancel or reschedule my pickup?', a: 'Yes — you can cancel or reschedule up to 1 hour before the pickup slot at no charge. After that, a ₹20 cancellation fee applies.' },
            { q: 'How do I track my order in real time?', a: 'Go to the Orders tab after booking. You\'ll see live status updates, your delivery partner\'s name, and a notification log for each step.' },
            { q: 'How do I use my referral reward?', a: 'When a friend signs up using your referral code and places their first order, ₹50 is automatically credited to your wallet for your next order.' }
        ].map((f, i) => `
            <div class="faq-item" id="faq-${i}">
                <button class="faq-question" onclick="app.toggleFaq(this)">
                    <span>${f.q}</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="faq-answer">${f.a}</div>
            </div>
        `).join('');

        return `
            <div class="header" style="padding:20px 20px 16px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                    <div style="font-size:20px; font-weight:700;">Profile</div>
                    <button onclick="app.navigate('login')" style="display:flex; align-items:center; gap:6px; background:none; border:1px solid var(--border-color); border-radius:var(--radius-full); padding:6px 14px; font-size:13px; font-weight:600; color:var(--danger); cursor:pointer; font-family:inherit; transition:background 0.15s;" onmouseover="this.style.background='#FEE2E2'" onmouseout="this.style.background='none'">
                        <i class="fa-solid fa-right-from-bracket"></i> Logout
                    </button>
                </div>
                <div style="display:flex; align-items:center; gap:14px;">
                    <div class="profile-avatar">${p.name.charAt(0)}</div>
                    <div>
                        <div style="font-size:18px; font-weight:700;">${p.name}</div>
                        <div style="font-size:13px; color:var(--text-secondary); margin-top:2px;">${this.enteredPhone || p.phone}</div>
                    </div>
                    <button class="profile-link-btn" style="margin-left:auto;" onclick="alert('Edit profile (prototype)')">Edit</button>
                </div>
            </div>

            <div style="padding: 16px 0 100px;">

                <!-- Saved Addresses -->
                <div class="profile-section">
                    <div class="profile-section-header">
                        <div class="profile-section-title"><i class="fa-solid fa-location-dot"></i> Saved Addresses</div>
                        <button class="profile-link-btn" onclick="alert('Add new address (prototype)')"><i class="fa-solid fa-plus" style="font-size:11px;"></i> Add</button>
                    </div>
                    ${addressRows}
                </div>

                <!-- Order History -->
                <div class="profile-section">
                    <div class="profile-section-header">
                        <div class="profile-section-title"><i class="fa-solid fa-clock-rotate-left"></i> Order History</div>
                    </div>
                    ${orderRows}
                </div>

                <!-- Payment Methods -->
                <div class="profile-section">
                    <div class="profile-section-header">
                        <div class="profile-section-title"><i class="fa-solid fa-wallet"></i> Payment Methods</div>
                        <button class="profile-link-btn" onclick="alert('Add payment method (prototype)')"><i class="fa-solid fa-plus" style="font-size:11px;"></i> Add</button>
                    </div>
                    ${paymentRows}
                </div>

                <!-- Notification Preferences -->
                <div class="profile-section">
                    <div class="profile-section-header">
                        <div class="profile-section-title"><i class="fa-solid fa-bell"></i> Notification Preferences</div>
                    </div>
                    ${notifRows}
                </div>

                <!-- Referral -->
                <div class="profile-section" style="overflow:visible;">
                    <div class="profile-section-header">
                        <div class="profile-section-title"><i class="fa-solid fa-gift"></i> Refer a Friend</div>
                    </div>
                    <div style="padding:12px 16px 6px; font-size:13px; color:var(--text-secondary); line-height:1.5;">
                        Refer a friend and get <strong style="color:var(--text-primary);">₹50 off</strong> your next order when they place their first.
                    </div>
                    <div class="referral-code-box">
                        <div class="referral-code">${p.referralCode}</div>
                        <button id="copy-referral-btn" class="profile-link-btn" onclick="app.copyReferral()" style="display:flex;align-items:center;gap:4px;">
                            <i class="fa-regular fa-copy"></i> Copy
                        </button>
                    </div>
                    <div style="padding:8px 16px 16px; display:flex; gap:10px;">
                        <button class="btn-primary" style="flex:1; padding:12px; font-size:14px; display:flex;align-items:center;justify-content:center;gap:8px;" onclick="alert('Share via WhatsApp/SMS (prototype)')">
                            <i class="fa-solid fa-share-nodes"></i> Share with a friend
                        </button>
                    </div>
                </div>

                <!-- Help & Support -->
                <div class="profile-section">
                    <div class="profile-section-header">
                        <div class="profile-section-title"><i class="fa-solid fa-headset"></i> Help & Support</div>
                    </div>
                    <div class="profile-row" style="cursor:pointer;" onclick="app.navigate('orders')">
                        <div class="profile-row-icon" style="background:#FFF7ED; color:#EA580C;"><i class="fa-solid fa-circle-exclamation"></i></div>
                        <div class="profile-row-body">
                            <div class="profile-row-label">Track an issue</div>
                            <div class="profile-row-sub">1 open dispute · Order #LDY-49281</div>
                        </div>
                        <i class="fa-solid fa-chevron-right" style="color:var(--text-tertiary); font-size:12px;"></i>
                    </div>
                    <div class="profile-row" style="cursor:pointer;" onclick="app.openContactSheet()">
                        <div class="profile-row-icon" style="background:var(--accent-light); color:var(--accent);"><i class="fa-solid fa-comment-dots"></i></div>
                        <div class="profile-row-body">
                            <div class="profile-row-label">Contact us</div>
                            <div class="profile-row-sub">Chat or call our support team</div>
                        </div>
                        <i class="fa-solid fa-chevron-right" style="color:var(--text-tertiary); font-size:12px;"></i>
                    </div>
                    <div style="padding:4px 0;">
                        <div style="padding:10px 16px 4px; font-size:12px; font-weight:600; color:var(--text-secondary); text-transform:uppercase; letter-spacing:0.5px;">FAQ</div>
                        ${faqs}
                    </div>
                </div>

                <!-- Logout -->
                <div style="padding:8px 16px 24px;">
                    <button onclick="app.navigate('login')" style="width:100%; display:flex; align-items:center; justify-content:center; gap:10px; padding:14px; background:white; color:var(--danger); border:1.5px solid #FECACA; border-radius:var(--radius-md); font-size:15px; font-weight:600; font-family:inherit; cursor:pointer; transition:background 0.15s;" onmouseover="this.style.background='#FFF1F2'" onmouseout="this.style.background='white'">
                        <i class="fa-solid fa-right-from-bracket"></i> Log Out
                    </button>
                    <p style="text-align:center; font-size:12px; color:var(--text-tertiary); margin-top:12px;">LaundryHub v1.0.0</p>
                </div>

            </div>
        `;
    },

    submitIssueReport() {
        const desc = document.getElementById('report-issue-desc');
        if (!desc || !desc.value.trim()) {
            desc.style.borderColor = 'var(--danger)';
            desc.placeholder = 'Please describe the issue before submitting.';
            return;
        }
        const ticketId = '#TKT-' + Math.floor(10000 + Math.random() * 90000);
        document.getElementById('report-ticket-id').textContent = ticketId;
        document.getElementById('report-issue-form').style.display = 'none';
        document.getElementById('report-issue-success').style.display = 'block';
    },

    reorder(orderId) {
        const order = this.profile.orderHistory.find(o => o.id === orderId);
        if (!order) return;
        const vendor = vendors.find(v => v.name === order.vendor);
        if (vendor) {
            this.navigate('vendor', vendor.id);
        } else {
            alert('Vendor not available for reorder at the moment.');
        }
    },

    openContactSheet() {
        const body = document.getElementById('sheet-body');
        if (!body) return;
        body.innerHTML = `
            <div style="padding:8px 0 24px;">
                <div style="font-size:18px; font-weight:700; margin-bottom:4px;">Contact Support</div>
                <div style="font-size:13px; color:var(--text-secondary); margin-bottom:24px;">We're available Mon–Sat, 9 AM – 8 PM</div>
                <div style="display:flex; flex-direction:column; gap:12px;">
                    <button class="btn-primary" style="display:flex;align-items:center;justify-content:center;gap:10px; padding:14px;" onclick="alert('Opening chat (prototype)')">
                        <i class="fa-solid fa-comment-dots"></i> Chat with us
                    </button>
                    <a href="tel:+918001234567" class="btn-primary" style="display:flex;align-items:center;justify-content:center;gap:10px; padding:14px; text-decoration:none; background:white; color:var(--text-primary); border:1px solid var(--border-color);">
                        <i class="fa-solid fa-phone" style="color:var(--accent);"></i> Call +91 800-123-4567
                    </a>
                </div>
            </div>
        `;
        document.getElementById('bottom-sheet').classList.add('open');
    },

    renderCheckoutSuccess() {
        let v = this.selectedVendor;
        let orderId = 'LDY-' + Math.floor(10000 + Math.random() * 90000);
        
        return `
            <div style="min-height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center; padding:24px; text-align:center; background:var(--bg-card);">
                <div style="width:80px; height:80px; background:var(--accent-light); color:var(--accent); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:40px; margin-bottom:24px;">
                    <i class="fa-solid fa-check"></i>
                </div>
                
                <h2 style="font-size:24px; font-weight:700; margin-bottom:8px;">Order Confirmed!</h2>
                <p style="color:var(--text-secondary); margin-bottom:24px;">Your order has been successfully placed with <strong>${v.name}</strong>.</p>
                
                <div style="background:var(--bg-main); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:20px; width:100%; text-align:left; margin-bottom:16px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
                        <span style="color:var(--text-secondary); font-size:14px;">Order ID</span>
                        <span style="font-weight:600;">${orderId}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between;">
                        <span style="color:var(--text-secondary); font-size:14px;">Pickup Slot</span>
                        <span style="font-weight:600; text-align:right;">${this.bookingDate}<br>${this.bookingTime}</span>
                    </div>
                </div>

                <!-- Garment Protection assurance -->
                <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:var(--radius-md); padding:16px; width:100%; text-align:left; margin-bottom:16px; display:flex; gap:12px; align-items:flex-start;">
                    <i class="fa-solid fa-shield-halved" style="color:#16A34A; font-size:20px; margin-top:2px; flex-shrink:0;"></i>
                    <div>
                        <div style="font-weight:600; color:#166534; font-size:14px; margin-bottom:4px;">Garment Protection Policy</div>
                        <div style="font-size:13px; color:#15803D; line-height:1.5;">Your clothes are covered under our Garment Protection Policy. If anything goes wrong, we’ll make it right.</div>
                    </div>
                </div>

                <div style="background:#EFF6FF; color:#1D4ED8; padding:14px 16px; border-radius:var(--radius-md); font-size:14px; line-height:1.5; margin-bottom:auto; width:100%;">
                    <i class="fa-regular fa-bell" style="margin-right:8px;"></i>
                    We'll notify you when your pickup partner is assigned.
                </div>
                
                <div style="width:100%; margin-top:28px;">
                    <button class="btn-primary" style="width:100%; margin-bottom:12px;" onclick="app.cart={}; app.orderPaid=false; app.orderStatus='weighing'; app.garmentDecision=null; if(app.orderTimer) clearTimeout(app.orderTimer); app.navigate('orders')">Track Order</button>
                    <button class="btn-primary" style="width:100%; background:transparent; color:var(--text-primary); border:1px solid var(--border-color);" onclick="app.cart={}; app.navigate('home')">Back to Home</button>
                </div>
            </div>
        `;
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
