<template>
  <div class="modal fade top-50 translate-middle-y" id="formModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="pt-5 pb-4"></div>
    <div class="modal-dialog py-5">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title px-2 fs-6" id="modalLabel">Message sent successfully!</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body fs-6 px-4 black-text fw-medium">
          Thank you, we'll reach ou as soon as possible
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger px-4 py-2 text-white" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Modal',
};
</script>
