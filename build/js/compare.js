$(".compare__remove").click(function () {
  const index = $(this).parents("th").index();
  $(this).closest('table').find('tr').each(function () {
    this.removeChild(this.cells[index]);
  });
});
