import { observable} from 'mobx';

class MainStore {
    @observable active;
    @observable activeProject;
    @observable activeSection;
    @observable projectInfo;

    constructor() {
        this.active = false;
        this.activeProject = 1;
        this.activeSection = 2;
        this.projectInfo = [{

        },
        {
            id: 2,
            images: []
        }]
    }

    toggleRightPanel() {
        this.active = !this.active;
    }

    changeSection(item) {
        this.activeSection = item;
        console.log(this.activeSection);
    }

    toggleActiveProject(item) {
        this.activeProject = item;
        console.log('asdasd');
    }
}

const mainStore = new MainStore();
export default mainStore;
export {MainStore};