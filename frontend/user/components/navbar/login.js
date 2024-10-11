class LoginForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Modal -->
        <div class="modal fade" id="login" tabindex="-1" aria-labelledby="loginModal" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-fullscreen-sm-down modal-dialog-centered">
                <div class="modal-content">
        
                    <!-- Header -->
                    <div class="modal-header ">
                        <h2 class="modal-title text-uppercase mt-3">Log In</h2>
                        <button type="button" class="btn btn-light close-btn" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg"></i></button>
                    </div>
  
                    <!-- Body -->
                    <div class="modal-body">
                        <form id="loginForm" method="POST" action="/login" class="needs-validation" novalidate>
    
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="loginEmail" name="email" placeholder="johnnyman@gmail.com" required>
                                        <div class="invalid-feedback">Please enter a valid email</div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col">
                                        <label for="passwordlog" class="form-label">Password</label>
                                        <div class="input-group">
                                            <input type="password" class="form-control" id="loginPassword" name="password" minlength="6" 
                                            placeholder="Enter your Password" spellcheck="false" autocorrect="off" autocapitalize="off" 
                                            autocomplete="current-password" aria-describedby="addon-wrapping" required>
                                            <span class="input-group-text" id="addon-wrapping">
                                                <i class="bi bi-eye-fill" id="togglePassword" aria-label="Show password as plain text" style="cursor: pointer;"></i>
                                            </span>
                                            <div class="invalid-feedback">Password must be at least 6 characters</div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <!-- Forgot Password Link -->
                            <div class="form-group mutedText">
                                <div class="row">
                                    <div class="col mb-2 text-end">
                                        <a href="#" class="text-muted">Forgot Password?</a>
                                    </div>
                                </div>
                            </div>

                            <!-- login Button -->
                            <div class="d-flex mb-1 justify-content-center">
                                <button type="submit" class="btn shadow-lg btn-warning btn-submit">Log In</button>
                                
                            </div>
    
                            <!-- Don't have an account? -->
                            <div class="form-group mt-4">
                                <div class="row d-flex">
                                    <div class="col-7">
                                        <p class="mutedText">Don't have an account?</p>
                                    </div>
                                    <div class="col-5">
                                        <button type="button" class="btn btn-createAcc shadow-lg btn-dark ms-auto" data-bs-toggle="modal" data-bs-target="#createAccount">Create Account</button>
                                    </div>
                                </div>
                            </div> 
                            
                        </form>
                    </div>
  
                </div>
            </div>
        </div>
        `;
    }
}

// Define custom element
customElements.define('login-form', LoginForm);

document.addEventListener('DOMContentLoaded', function () {

    // Initialize modal
    var loginModal = new bootstrap.Modal(document.getElementById('login'), {
        keyboard: false,
        backdrop: 'static'
    });
    
    // Open the modal on clicking 'Login'
    document.getElementById('login-link').addEventListener('click', function () {
        loginModal.show();
    });

    // password visibility by toggle icon
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('loginPassword');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('bi-eye-fill');
            this.classList.toggle('bi-eye-slash-fill');
        });
    }


});

// Change background color when the modal is shown
document.getElementById('login').addEventListener('show.bs.modal', function () {
    document.querySelector('header').classList.add('dark-background');
});
  
// Revert background color when the modal is hidden
document.getElementById('login').addEventListener('hide.bs.modal', function () {
    document.querySelector('header').classList.remove('dark-background');
});
  
document.getElementById('login').addEventListener('show.bs.modal', function () {
    document.querySelector('.header-search').classList.add('change-background');
});
  
document.getElementById('login').addEventListener('hide.bs.modal', function () {
    document.querySelector('.header-search').classList.remove('change-background');
});
  
document.getElementById('login').addEventListener('show.bs.modal', function () {
    document.querySelector('.header-search input').classList.add('changeinput-background');
});
  
document.getElementById('login').addEventListener('hide.bs.modal', function () {
    document.querySelector('.header-search input').classList.remove('changeinput-background');
});
  
document.getElementById('login').addEventListener('show.bs.modal', function () {
    document.querySelector('#drop-down').classList.add('changemenu-background');
});
  
document.getElementById('login').addEventListener('hide.bs.modal', function () {
    document.querySelector('#drop-down').classList.remove('changemenu-background');
});
  
document.getElementById('login').addEventListener('show.bs.modal', function () {
    document.querySelector('.box').classList.add('changemenu-background');
});
  
document.getElementById('login').addEventListener('hide.bs.modal', function () {
    document.querySelector('.box').classList.remove('changemenu-background');
});

  
