new Vue({
    el: '#app',
    data: {
      name: '',
      comment: '',
      comments: []
    },
    methods: {
      addComment() {
        const newComment = {
          id: Date.now(),
          name: this.name,
          comment: this.comment
        };
        this.comments.push(newComment);
        this.name = '';
        this.comment = '';
      }
    }
  });
  
