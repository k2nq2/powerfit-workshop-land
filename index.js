document.querySelectorAll(".accordion-header").forEach(button => {
    button.addEventListener("click", () => {
        const accordionItem = button.parentElement;
        
        // Закрываем все остальные
        document.querySelectorAll(".accordion-item").forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove("active");
            }
        });

        // Переключаем текущий
        accordionItem.classList.toggle("active");
    });
});

 