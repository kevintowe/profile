import { NgModule } from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  exports: [MatButtonModule, MatToolbarModule, MatIconModule],
})
export class MaterialModule {}