class RegistrationForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Modal -->
        <div class="modal fade" id="createAccount" tabindex="-1" aria-labelledby="createAccountLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-fullscreen-sm-down modal-dialog-centered">
                <div class="modal-content">
        
                    <!-- Header -->
                    <div class="modal-header">
                        <h2 class="modal-title text-uppercase mt-3">Create An Account</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
  
                    <!-- Body -->
                    <div class="modal-body">
                        <form id="registrationForm" action="" class="needs-validation" novalidate>

                            <div class="form-group">
                                <div class="row mb-1">
                                    <div class="col-6">
                                        <label for="firstName" class="form-label">First Name</label>
                                        <input type="text" class="form-control" id="firstName" name="firstName" placeholder="John" pattern="[A-Za-z]+" required>
                                        <div class="invalid-feedback">Please enter a valid first name</div>
                                    </div>
                                    <div class="col-6">
                                        <label for="lastName" class="form-label">Last Name</label>
                                        <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Doe" pattern="[A-Za-z]+" required>
                                        <div class="invalid-feedback">Please enter a valid last name</div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 mb-1">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="email" name="email" placeholder="example@gmail.com" required>
                                        <div class="invalid-feedback">Please enter a valid email address</div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="form-group">
                                <div class="row">
                                    <div class="col mb-1">
                                        <label for="password" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="password" name="password" minlength="6" required>
                                        <div class="invalid-feedback">Password must be at least 6 characters long</div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="form-group">
                                <div class="row">
                                    <div class="col mb-1">
                                        <label for="confirmPassword" class="form-label">Confirm Password</label>
                                        <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" required>
                                        <div class="invalid-feedback">Passwords do not match</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Submit Button -->
                            <div class="d-flex mb-1 mt-4 justify-content-center">
                                <button type="submit" class="btn shadow-lg btn-warning w-100">Create Account</button>
                            </div>
    
                            <!-- Already have an account? -->
                            <div class="form-group mt-4 mb-5">
                                <p class="text-muted">Already have an account?</p>
                                <div class="d-flex mb-3 justify-content-center">
                                    <button type="button" class="btn shadow-lg btn-dark w-100" data-bs-toggle="modal" data-bs-target="#login">Log In</button>
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
customElements.define('registration-form', RegistrationForm);

