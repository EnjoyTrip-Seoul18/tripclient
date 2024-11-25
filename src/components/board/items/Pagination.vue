<template>
  <nav>
    <ul class="pagination justify-content-center">
      <!-- Previous Button -->
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <button
          class="page-link"
          @click="changePage(currentPage - 1)"
          :disabled="currentPage === 1"
        >
          Previous
        </button>
      </li>

      <!-- Page Numbers -->
      <li
        v-for="page in totalPages"
        :key="page"
        class="page-item"
        :class="{ active: page === currentPage }"
      >
        <button class="page-link" @click="changePage(page)">{{ page }}</button>
      </li>

      <!-- Next Button -->
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <button
          class="page-link"
          @click="changePage(currentPage + 1)"
          :disabled="currentPage === totalPages"
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { computed, defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "Pagination",
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  emits: ["page-change"],
  setup(props, { emit }) {
    const { totalItems, itemsPerPage, currentPage } = toRefs(props);

    // Calculate total pages
    const totalPages = computed(() =>
      Math.ceil(totalItems.value / itemsPerPage.value)
    );

    // Emit page change event
    const changePage = (page) => {
      if (page > 0 && page <= totalPages.value) {
        emit("page-change", page);
      }
    };

    return {
      totalPages,
      currentPage,
      changePage,
    };
  },
});
</script>

<style>
.pagination .active .page-link {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.pagination .disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
  border-color: #dee2e6;
}
</style>
