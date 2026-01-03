import { Thing } from "./base-thing";

export class BaseCRUDService<T extends Thing> {
    protected data: T[] = [];
    list() {
        return [...this.data];
    }
    add(item: T) {
        this.data.push(item);
    }
    update(item: T) {
        const index = this.data.findIndex(b => b.id == item.id);
        if (index != -1) {
            this.edit(this.data[index], item)
        }
    }
    edit(destination: T, source: T) {

    }
    remove(item: T) {
        this.data = this.data.filter(m => m.id != item.id);
    }
    //CRUD
}
// this.data[index].name = item.name;
// this.data[index].lastname = item.lastname;
// this.data[index].tel = item.tel;
// this.data[index].address = item.address;