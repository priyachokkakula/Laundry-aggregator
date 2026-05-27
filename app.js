const vendors = [
    {
        id: 'v1',
        name: 'Sparkle Clean Laundry',
        rating: 4.8,
        reviews: 342,
        distance: '1.2 km',
        eta: '24h',
        verified: true,
        estPrice: 249
    },
    {
        id: 'v2',
        name: 'Fresh Fold Hub',
        rating: 4.5,
        reviews: 128,
        distance: '2.5 km',
        eta: '48h',
        verified: true,
        estPrice: 199
    },
    {
        id: 'v3',
        name: 'Premium Dry Cleaners',
        rating: 4.9,
        reviews: 512,
        distance: '3.1 km',
        eta: '72h',
        verified: true,
        estPrice: 499
    }
];

const services = [
    { id: 's1', name: 'Wash & Fold', desc: 'Everyday clothes, washed and perfectly folded', price: '₹40 / kg' },
    { id: 's2', name: 'Wash & Iron', desc: 'Washed, steam ironed on hangers', price: '₹60 / kg' },
    { id: 's3', name: 'Premium Dry Clean', desc: 'Special care for suits, silk, and wool', price: 'from ₹150' },
    { id: 's4', name: 'Shoe Spa', desc: 'Deep cleaning and restoration', price: 'from ₹299' }
];

const app = {
    currentView: 'home',
    selectedVendor: null,
    
    init() {
        this.navigate('login');
    },
    
    navigate(view, param = null) {
        this.currentView = view;
        const content = document.getElementById('app-content');
        const bottomNav = document.querySelector('.bottom-nav');
        
        // Hide nav on auth/location screens
        if (['login', 'location'].includes(view)) {
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
        } else if (view === 'orders') {
            content.innerHTML = this.renderOrders();
        } else if (view === 'profile') {
            content.innerHTML = `<div class="header"><div class="header-title">Profile</div></div><div style="padding:20px; color:var(--text-secondary);">Profile settings coming soon...</div>`;
        }
    },
    
    // VIEWS
    renderHome() {
        let vendorHTML = vendors.map(v => `
            <div class="vendor-card" onclick="app.navigate('vendor', '${v.id}')">
                <div class="vendor-header">
                    <div>
                        <div class="vendor-name">${v.name}</div>
                        <div class="vendor-meta">
                            <span><i class="fa-solid fa-location-dot"></i> ${v.distance}</span>
                            <i class="fa-solid fa-circle"></i>
                            <span><i class="fa-regular fa-clock"></i> ${v.eta}</span>
                        </div>
                    </div>
                    ${v.verified ? `<div class="badge-verified"><i class="fa-solid fa-check-circle"></i> Verified</div>` : ''}
                </div>
                <div class="vendor-footer">
                    <div class="rating"><i class="fa-solid fa-star"></i> ${v.rating} <span style="color:var(--text-secondary);font-size:12px;font-weight:400;">(${v.reviews})</span></div>
                    <div class="price-est"><span>Est.</span> ₹${v.estPrice} / order</div>
                </div>
            </div>
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
                    <div class="chip active">All</div>
                    <div class="chip">Wash & Fold</div>
                    <div class="chip">Dry Clean</div>
                    <div class="chip">Fast Delivery (< 24h)</div>
                    <div class="chip">Top Rated (4.5+)</div>
                </div>
            </div>
            
            <div class="vendor-list">
                ${vendorHTML}
            </div>
        `;
    },
    
    renderVendor() {
        let v = this.selectedVendor;
        let servicesHTML = services.map(s => `
            <div class="service-item">
                <div class="service-info">
                    <h4>${s.name}</h4>
                    <p>${s.desc}</p>
                </div>
                <div class="service-price">${s.price}</div>
            </div>
        `).join('');

        return `
            <div class="page-header">
                <button class="btn-icon" onclick="app.navigate('home')"><i class="fa-solid fa-arrow-left"></i></button>
                <div style="font-weight:600;font-size:18px;">${v.name}</div>
            </div>
            
            <div style="padding: 20px;">
                <div style="display:flex; justify-content:space-between; margin-bottom:16px;">
                    <div class="rating"><i class="fa-solid fa-star"></i> ${v.rating} (${v.reviews} reviews)</div>
                    ${v.verified ? `<div class="badge-verified"><i class="fa-solid fa-check-circle"></i> Verified Provider</div>` : ''}
                </div>
                <p style="color:var(--text-secondary);font-size:14px;line-height:1.5;margin-bottom:20px;">
                    Premium laundry facility equipped with industrial washers. We use eco-friendly detergents and guarantee 100% fabric safety.
                </p>
                
                <div style="display:flex;gap:12px;margin-bottom:24px;">
                    <div style="flex:1;background:var(--primary-light);padding:12px;border-radius:12px;text-align:center;">
                        <div style="font-weight:700;color:var(--primary);font-size:16px;">${v.eta}</div>
                        <div style="font-size:12px;color:var(--text-secondary);">Turnaround</div>
                    </div>
                    <div style="flex:1;background:var(--accent-light);padding:12px;border-radius:12px;text-align:center;">
                        <div style="font-weight:700;color:var(--accent);font-size:16px;">Free</div>
                        <div style="font-size:12px;color:var(--text-secondary);">Pickup & Drop</div>
                    </div>
                </div>
            </div>
            
            <div class="section-title">Available Services</div>
            ${servicesHTML}
            
            <div class="bottom-action-bar">
                <button class="btn-primary" onclick="app.showBookingSheet()">Schedule Pickup</button>
            </div>
        `;
    },
    
    renderOrders() {
        // Simulating an active tracked order
        return `
            <div class="header">
                <div class="header-title">Active Order</div>
                <div class="header-subtitle">Order #LDY-49281 • ${this.selectedVendor ? this.selectedVendor.name : 'Sparkle Clean Laundry'}</div>
            </div>
            
            <div class="tracking-container">
                
                <div class="notification-card">
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <div class="notification-content">
                        <h4>Slight Delay Detected</h4>
                        <p>Delivery is delayed by 30 mins due to heavy rainfall in your area. New ETA is 6:30 PM.</p>
                    </div>
                </div>
                
                <div class="status-banner">
                    <h2>Ironing in Progress</h2>
                    <p>Updated ETA: Today, 6:30 PM</p>
                </div>
                
                <div class="timeline">
                    <div class="timeline-item completed">
                        <h4>Clothes Picked Up</h4>
                        <div class="timeline-meta">Today, 9:00 AM • Weighed: 4.2 kg</div>
                    </div>
                    <div class="timeline-item completed">
                        <h4>Washing Completed</h4>
                        <div class="timeline-meta">Today, 11:45 AM</div>
                    </div>
                    <div class="timeline-item active">
                        <h4>Ironing</h4>
                        <div class="timeline-meta">In progress...</div>
                    </div>
                    <div class="timeline-item">
                        <h4>Packed & Ready</h4>
                        <div class="timeline-meta">Pending</div>
                    </div>
                    <div class="timeline-item">
                        <h4>Out for Delivery</h4>
                        <div class="timeline-meta">Pending</div>
                    </div>
                </div>
                
                <button class="btn-primary" style="margin-top:32px; background:white; color:var(--text-primary); border:1px solid var(--border-color);">
                    <i class="fa-solid fa-headset" style="margin-right:8px;"></i> Contact Support
                </button>
            </div>
        `;
    },

    renderLogin() {
        return `
            <div class="auth-container">
                <div style="text-align:center; margin-bottom:40px;">
                    <i class="fa-solid fa-jug-detergent" style="font-size:48px; color:var(--primary); margin-bottom:16px;"></i>
                    <h1 class="auth-title">LaundryAgg</h1>
                    <p class="auth-subtitle">Clean clothes, delivered to your door.</p>
                </div>
                
                <div class="input-group">
                    <label>Phone Number</label>
                    <input type="tel" class="input-field" placeholder="Enter your 10-digit number" value="9876543210">
                </div>
                
                <button class="btn-primary" style="margin-top:24px;" onclick="app.navigate('location')">
                    Get OTP
                </button>
                
                <div class="divider">OR</div>
                
                <button class="btn-primary" style="background:white; color:var(--text-primary); border:1px solid var(--border-color); display:flex; align-items:center; justify-content:center; gap:12px;">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" width="18" height="18" alt="G">
                    Continue with Google
                </button>
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
    
    // Bottom Sheet Logic
    showBookingSheet() {
        const html = `
            <h3 style="margin-bottom:8px;font-size:20px;">Select Pickup Slot</h3>
            <p style="color:var(--text-secondary);font-size:14px;margin-bottom:16px;">Rider will weigh clothes at pickup to confirm final price.</p>
            
            <div style="font-weight:600;margin-top:16px;">Today</div>
            <div class="slot-grid">
                <button class="slot-btn" onclick="app.selectSlot(this)">5:00 PM - 6:00 PM</button>
                <button class="slot-btn" onclick="app.selectSlot(this)">6:00 PM - 7:00 PM</button>
                <button class="slot-btn" onclick="app.selectSlot(this)">7:00 PM - 8:00 PM</button>
                <button class="slot-btn" onclick="app.selectSlot(this)">8:00 PM - 9:00 PM</button>
            </div>
            
            <button class="btn-primary" id="confirm-booking-btn" style="opacity:0.5;pointer-events:none;" onclick="app.confirmBooking()">Confirm Slot</button>
        `;
        document.getElementById('sheet-body').innerHTML = html;
        document.getElementById('bottom-sheet').classList.add('open');
    },
    
    closeSheet() {
        document.getElementById('bottom-sheet').classList.remove('open');
    },
    
    selectSlot(btn) {
        document.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        
        const confirmBtn = document.getElementById('confirm-booking-btn');
        confirmBtn.style.opacity = '1';
        confirmBtn.style.pointerEvents = 'auto';
    },
    
    confirmBooking() {
        this.closeSheet();
        // Simulate a tiny delay for realism
        setTimeout(() => {
            this.navigate('orders');
        }, 300);
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
