import { NgModule } from '@angular/core'
import { IconButton } from '../icon-button/icon-button';
import { Button } from '../button/button';

@NgModule({
    declarations: [IconButton, Button], //Components, pipes and directives
    imports: [], //imports built-inn lib
    providers: [], //services
    exports: [IconButton, Button], //export
})

export class ButtonsModule {

}