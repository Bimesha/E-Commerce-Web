class RegistrationForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <!--registration Modal -->
        <div class="modal fade" id="createAccount" tabindex="-1" aria-labelledby="createAccountForm" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-fullscreen-sm-down modal-dialog-centered">
                <div class="modal-content">
        
                    <!-- Header -->
                    <div class="modal-header">
                        <h2 class="modal-title text-uppercase mt-2">Create An Account</h2>
                        <button type="button" class="btn btn-light close-btn" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg"></i></button>
                    </div>
  
                    <!-- Body -->
                    <div class="modal-body">
                        <form id="registrationForm" method="POST" action="/create-account" class="needs-validation" novalidate>

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
                                        <div class="input-group">
                                            <input type="password" class="form-control" id="password" name="password" minlength="6"
                                                placeholder="Create Password" autocomplete="new-password" required>
                                            <span class="input-group-text">
                                                <i class="bi bi-eye-fill" id="toggleRegPassword" aria-label="Show password as plain text" style="cursor: pointer;"></i>
                                            </span>
                                            <div class="invalid-feedback">Password must be at least 6 characters</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="form-group">
                                <div class="row">
                                    <div class="col">
                                        <label for="confirmPassword" class="form-label">Confirm Password</label>
                                        <div class="input-group">
                                            <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" minlength="6"  placeholder="Re-Enter Password" required>
                                            <span class="input-group-text">
                                                <i class="bi bi-eye-fill" id="toggleConfirmPassword" aria-label="Show password as plain text" style="cursor: pointer;"></i>
                                            </span>
                                        <div class="invalid-feedback">Passwords do not match</div>
                                        </div>
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
                                    <p class="small-text">Already have an account?</p><button type="button" class="btn btn-log shadow-lg btn-dark ms-auto" data-bs-toggle="modal" data-bs-target="#login">Log In</button>
                                </div>
                            </div>  
                        </form>
                    </div>
  
                </div>
            </div>
        </div>

        <section class="popup-section">
        <!-- Success Modal -->
        <div class="modal fade" id="regSuccessModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                  <div class="modal-body">
                      <i class="bi bi-check-circle icon-success"></i>
                  </div>

                  <div class="modal-para">
                    <p>Account created successfully!</p>
                  </div>

                  <div class="modal-footer justify-content-center">
                      <button type="button" class="btn btn-success" data-bs-dismiss="modal">OK</button>
                  </div>
              </div>
          </div>
        </div>

        <!-- Failure Modal -->
        <div class="modal fade" id="regFailureModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <i class="bi bi-x-circle icon-error"></i>
                    </div>

                    <div class="modal-para">
                        <p id="regFailureMsg">Registration Failed! Please try again.</p>
                    </div>
                    
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `;
  }
}

customElements.define("registration-form", RegistrationForm);

document.addEventListener("DOMContentLoaded", function () {
  // Initialize modal
  var createAccountModal = new bootstrap.Modal(
    document.getElementById("createAccount"),
    {
      keyboard: false,
      backdrop: "static",
    }
  );

  // Open the modal on clicking 'Create Account'
  document.getElementById("signup-link").addEventListener("click", function () {
    createAccountModal.show();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Toggle visibility for the first password field
  const toggleRegPassword = document.querySelector("#toggleRegPassword");
  const passwordField = document.querySelector("#password");

  toggleRegPassword.addEventListener("click", function () {
    const type =
      passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    this.classList.toggle("bi-eye-fill");
    this.classList.toggle("bi-eye-slash-fill");
  });

  // Toggle visibility for the second confirm password field
  const toggleConfirmPassword = document.querySelector(
    "#toggleConfirmPassword"
  );
  const confirmPasswordField = document.querySelector("#confirmPassword");

  toggleConfirmPassword.addEventListener("click", function () {
    const type =
      confirmPasswordField.getAttribute("type") === "password"
        ? "text"
        : "password";
    confirmPasswordField.setAttribute("type", type);
    this.classList.toggle("bi-eye-fill");
    this.classList.toggle("bi-eye-slash-fill");
  });
});

// Change background color when the modal is shown
document
  .getElementById("createAccount")
  .addEventListener("show.bs.modal", function () {
    document
      .querySelector(".header-container")
      .classList.add("dark-background");
  });

// Revert background color when the modal is hidden
document
  .getElementById("createAccount")
  .addEventListener("hide.bs.modal", function () {
    document
      .querySelector(".header-container")
      .classList.remove("dark-background");
  });

document
  .getElementById("createAccount")
  .addEventListener("show.bs.modal", function () {
    document.querySelector(".header-search").classList.add("change-background");
  });

document
  .getElementById("createAccount")
  .addEventListener("hide.bs.modal", function () {
    document
      .querySelector(".header-search")
      .classList.remove("change-background");
  });

document
  .getElementById("createAccount")
  .addEventListener("show.bs.modal", function () {
    document
      .querySelector(".header-search input")
      .classList.add("changeinput-background");
  });

document
  .getElementById("createAccount")
  .addEventListener("hide.bs.modal", function () {
    document
      .querySelector(".header-search input")
      .classList.remove("changeinput-background");
  });

document
  .getElementById("createAccount")
  .addEventListener("show.bs.modal", function () {
    document.querySelector("#drop-down").classList.add("changemenu-background");
  });

document
  .getElementById("createAccount")
  .addEventListener("hide.bs.modal", function () {
    document
      .querySelector("#drop-down")
      .classList.remove("changemenu-background");
  });

const regSuccessModal = new bootstrap.Modal(
  document.getElementById("regSuccessModal")
);
const regFailureModal = new bootstrap.Modal(
  document.getElementById("regFailureModal")
);

// For failure modal background color change
document
  .getElementById("regFailureModal")
  .addEventListener("show.bs.modal", function () {
    document
      .querySelector("#createAccount .modal-dialog")
      .classList.add("form-dark-background");
  });

document
  .getElementById("regFailureModal")
  .addEventListener("hide.bs.modal", function () {
    setTimeout(() => {
      document
        .querySelector("#createAccount .modal-dialog")
        .classList.remove("form-dark-background");
    }, 200);
  });

// For success modal background color change
document
  .getElementById("regSuccessModal")
  .addEventListener("show.bs.modal", function () {
    document
      .querySelector("#createAccount .modal-dialog")
      .classList.add("form-dark-background");
  });

document
  .getElementById("regSuccessModal")
  .addEventListener("hide.bs.modal", function () {
    setTimeout(() => {
      document
        .querySelector("#createAccount .modal-dialog")
        .classList.remove("form-dark-background");
    }, 200);
  });
