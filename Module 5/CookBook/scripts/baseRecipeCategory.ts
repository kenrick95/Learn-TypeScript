class BaseRecipeCategory {
    private _name: string;
    private _foodGroups: FoodGroup[] = [];

    //TODO: Create get and set blocks for each of the variables in the declaration above.

    get name() {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
    get foodGroups() {
        return this._foodGroups;
    }
    set foodGroups(foodGroups: FoodGroup[]) {
        this._foodGroups = foodGroups;
    }


} 