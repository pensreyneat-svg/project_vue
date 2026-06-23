<template>
  <div class="content-wrapper" >
    <section class="content-header">
      <div class="container-fluid" style="margin:auto">

        <div class="row">
          <!-- Profile Image Box -->
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="card card-primary card-outline">
              <div class="card-body box-profile">
                <div class="text-center">
                  
                  <img
                    class="brand-image img-circle elevation-3"
                    :src="user"
                    alt="User profile picture"
                  >
                 
                </div>

                <h3 class="profile-username text-center">Nina Mcintire</h3>

                <p class="text-muted text-center">Software Engineer</p>

                <ul class="list-group list-group-unbordered mb-3">
                  <li class="list-group-item">
                    <b>Followers</b>
                    <a class="float-right">1,322</a>
                  </li>
                  <li class="list-group-item">
                    <b>Following</b>
                    <a class="float-right">543</a>
                  </li>
                  <li class="list-group-item">
                    <b>Friends</b>
                    <a class="float-right">13,287</a>
                  </li>
                </ul>

                <a href="#" class="btn btn-primary btn-block">
                  <b>Follow</b>
                </a>
              </div>
            </div>
          </div>

          <!-- About Me Box -->
          <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">About Me</h3>
              </div>

              <div class="card-body">
                <strong>
                  <i class="fas fa-book mr-1"></i> Education
                </strong>

                <p class="text-muted">
                  B.S. in Computer Science from the University of Tennessee at Knoxville
                </p>

                <hr>

                <strong>
                  <i class="fas fa-map-marker-alt mr-1"></i> Location
                </strong>

                <p class="text-muted">Malibu, California</p>

                <hr>

                <strong>
                  <i class="fas fa-pencil-alt mr-1"></i> Skills
                </strong>

                <p class="text-muted">
                  <span class="badge badge-danger">UI Design</span>
                  <span class="badge badge-success">Coding</span>
                  <span class="badge badge-info">Javascript</span>
                  <span class="badge badge-warning">PHP</span>
                  <span class="badge badge-primary">Node.js</span>
                </p>

                <hr>

                <strong>
                  <i class="far fa-file-alt mr-1"></i> Notes
                </strong>

                <p class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Etiam fermentum enim neque.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>
<script setup>
import user from '@/assets/images/user.png';
</script>
