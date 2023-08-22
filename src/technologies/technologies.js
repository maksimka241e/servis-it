let techTab = function () {
    let TechTab = document.querySelectorAll(".tabs-tech__item"),
    TechTabContent = document.querySelectorAll(".tech-tab"),
    TechTabName;

    TechTab.forEach(item => {
        item.addEventListener("click", selectTechTab)
    })

    function selectTechTab(){
        TechTab.forEach(item => {
            item.classList.remove("tech-active");
        });
        this.classList.add("tech-active");
        TechTabName = this.getAttribute("data-tab-tech");
        selecttTabContent(TechTabName);
    }

    function selecttTabContent(TechTabName) {
        TechTabContent.forEach(item => {
            item.classList.contains(TechTabName) ? item.classList.add("tech-active") : item.classList.remove("tech-active");
        })
    }
};

techTab();