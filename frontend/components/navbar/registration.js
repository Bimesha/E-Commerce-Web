class RegistrationForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!--registration Modal -->
        <div class="modal fade" id="createAccount" tabindex="-1" aria-labelledby="createAccountForm" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-fullscreen-sm-down modal-dialog-centered">
                <div class="modal-content">
        
                    <!-- Header -->
                    <div class="modal-header ">
                        <h2 class="modal-title text-uppercase mt-3">Create An Account</h2>
                        <button type="button" class="btn btn-light close-btn" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg"></i></button>
                    </div>
  
                    <!-- Body -->
                    <div class="modal-body">
                        <form id="registrationForm" action="" class="needs-validation" novalidate>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-6">
                                        <label for="firstName" class="form-label">First Name</label>
                                        <input type="text" class="form-control" id="firstName" name="firstName" placeholder="John" pattern="[A-Za-z]+" required>
                                        <div class="invalid-feedback">Enter a valid name</div>
                                    </div>
                                    <div class="col-6">
                                        <label for="lastName" class="form-label">Last Name</label>
                                        <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Doe" pattern="[A-Za-z]+" required>
                                        <div class="invalid-feedback">Enter a valid name</div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="email" name="email" placeholder="example@gmail.com" required>
                                        <div class="invalid-feedback">Please enter a valid email</div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="form-group">
                                <div class="row">
                                    <div class="col">
                                        <label for="password" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="password" name="password" minlength="6" placeholder="Create Password" required>
                                        <div class="invalid-feedback">Password must be at least 6 characters</div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="form-group">
                                <div class="row">
                                    <div class="col">
                                        <label for="confirmPassword" class="form-label">Confirm Password</label>
                                        <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" minlength="6" placeholder="Re-Enter Password" required>
                                        <div class="invalid-feedback">Passwords do not match</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Submit Button -->
                            <div class="d-flex mb-1 justify-content-center">
                                <button type="submit" class="btn shadow-lg btn-warning btn-submit">Create Account</button>
                                
                            </div>
    
                            <!-- Already have an account? -->
                            <div class="form-group mt-4">
                                <div class="d-flex">
                                    <p class="text-muted">Already have an account?</p><button type="button" class="btn btn-log shadow-lg btn-dark ms-auto" data-bs-toggle="modal" data-bs-target="#login">Log In</button>
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

customElements.define('registration-form', RegistrationForm);



document.addEventListener('DOMContentLoaded', function () {
    // Initialize modal
    var createAccountModal = new bootstrap.Modal(document.getElementById('createAccount'), {
        keyboard: false,
        backdrop: 'static'
    });
    
    // Open the modal on clicking 'Create Account'
    document.getElementById('signup-link').addEventListener('click', function () {
        createAccountModal.show();
    });
});
  
// Change background color when the modal is shown
document.getElementById('createAccount').addEventListener('show.bs.modal', function () {
    document.querySelector('header').classList.add('dark-background');
});
  
// Revert background color when the modal is hidden
document.getElementById('createAccount').addEventListener('hide.bs.modal', function () {
    document.querySelector('header').classList.remove('dark-background');
});
  
document.getElementById('createAccount').addEventListener('show.bs.modal', function () {
    document.querySelector('.header-search').classList.add('change-background');
});
  
document.getElementById('createAccount').addEventListener('hide.bs.modal', function () {
    document.querySelector('.header-search').classList.remove('change-background');
});
  
document.getElementById('createAccount').addEventListener('show.bs.modal', function () {
    document.querySelector('.header-search input').classList.add('changeinput-background');
});
  
document.getElementById('createAccount').addEventListener('hide.bs.modal', function () {
    document.querySelector('.header-search input').classList.remove('changeinput-background');
});
  
document.getElementById('createAccount').addEventListener('show.bs.modal', function () {
    document.querySelector('#drop-down').classList.add('changemenu-background');
});
  
document.getElementById('createAccount').addEventListener('hide.bs.modal', function () {
    document.querySelector('#drop-down').classList.remove('changemenu-background');
});
  
document.getElementById('createAccount').addEventListener('show.bs.modal', function () {
    document.querySelector('.box').classList.add('changemenu-background');
});
  
document.getElementById('createAccount').addEventListener('hide.bs.modal', function () {
    document.querySelector('.box').classList.remove('changemenu-background');
});



