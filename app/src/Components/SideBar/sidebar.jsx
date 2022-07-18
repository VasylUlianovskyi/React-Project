import Filters from "./filters"

const SideBar = () => {

    return (
      <div>
        <aside class="os-filters-panel">
          <form class="os-filters-panel-content" data-element="filters">
          <Filters />
          </form>
          <button data-element="clearFilters"
          className="os-btn-primary clear-filters"
          type="button">CLEAR ALL FILTERS
          </button>
        </aside>
        </div>
    )
}

export default SideBar;