import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import {DropdownModule} from 'primeng/dropdown';
import {MenuModule} from 'primeng/menu';
import {StyleClassModule} from 'primeng/styleclass';
import {SidebarModule} from 'primeng/sidebar';
import {CheckboxModule} from 'primeng/checkbox';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CommonModule} from '@angular/common';
import {FileUploadModule} from 'primeng/fileupload';
import {TabViewModule} from 'primeng/tabview';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FieldsetModule} from 'primeng/fieldset';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToolbarModule} from 'primeng/toolbar';
import {TabMenuModule} from 'primeng/tabmenu';
import { TagModule } from 'primeng/tag';
import {InputSwitchModule} from 'primeng/inputswitch';
import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';




const models=[
  CardModule,
  TimelineModule,
  InputSwitchModule,
  TagModule,
  TabMenuModule,
  ToolbarModule,
  ConfirmDialogModule,
  FieldsetModule,
  RadioButtonModule,
  CommonModule,
  TabViewModule,
  FileUploadModule,
  MessagesModule,
  MessageModule,
  SidebarModule,
  StyleClassModule,
  MenuModule,
  BrowserAnimationsModule,
  TableModule,
  CalendarModule,
  SliderModule,
  DialogModule,
  MultiSelectModule,
  ContextMenuModule,
  DropdownModule,
  ButtonModule,
  ToastModule,
  InputTextModule,
  ProgressBarModule,
  HttpClientModule,
  FormsModule,
  CheckboxModule
];

@NgModule({
  exports:[models],
  imports: [models]
})
export class PrimengModule { }
