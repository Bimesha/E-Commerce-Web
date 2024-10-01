class LoginForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Modal -->
        <div class="modal fade" id="login" tabindex="-1" aria-labelledby="loginForm" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-fullscreen-sm-down modal-dialog-centered">
                <div class="modal-content">
        
                    <!-- Header -->
                    <div class="modal-header ">
                        <h2 class="modal-title text-uppercase mt-3">Log In</h2>
                        <button type="button" class="btn btn-light close-btn" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg"></i></button>
                    </div>
  
                    <!-- Body -->
                    <div class="modal-body">
                        <form id="loginForm" action="" class="needs-validation" novalidate>
    
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="emaillog" name="email" placeholder="johndoe@gmail.com" required>
                                        <div class="invalid-feedback">Please enter a valid email</div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="form-group">
                                <div class="row">
                                    <div class="col">
                                        <label for="password" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="passwordlog" name="password" minlength="6" placeholder="Create Password" required>
                                        <div class="invalid-feedback">Password must be at least 6 characters</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Forgot Password Link -->
                            <div class="form-group">
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
                                <div class="d-flex">
                                    <p class="text-muted">Don't have an account?</p><button type="button" class="btn btn-log shadow-lg btn-dark ms-auto" data-bs-toggle="modal" data-bs-target="#createAccount">Create an Account</button>
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
