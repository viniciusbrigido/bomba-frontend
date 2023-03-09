import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgOptimizedImage } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ModuleCardComponent } from './components/module-card/module-card.component';
import { ButtonComponent } from './pages/button/button.component';
import { WireComponent } from './pages/wire/wire.component';
import { KeypadsComponent } from './pages/keypads/keypads.component';
import { WhosOnFirstComponent } from './pages/whos-on-first/whos-on-first.component';
import { MemoryComponent } from './pages/memory/memory.component';
import { MorseCodeComponent } from './pages/morse-code/morse-code.component';
import { ComplicatedWireComponent } from './pages/complicated-wire/complicated-wire.component';
import { WireSequenceComponent } from './pages/wire-sequence/wire-sequence.component';
import { MazeComponent } from './pages/maze/maze.component';
import { PasswordComponent } from './pages/password/password.component';
import { ButtonModalComponent } from './components/modal/button-modal/button-modal.component';
import { MessageModalComponent } from './components/modal/message-modal/message-modal.component';
import { CableSolverComponent } from './components/cable-solver/cable-solver.component';
import { KeypadImageComponent } from './components/keypad-image/keypad-image.component';
import { KeypadModalComponent } from './components/modal/keypad-modal/keypad-modal.component';
import { GeniusComponent } from './pages/genius/genius.component';
import { GeniusTableComponent } from './components/genius-table/genius-table.component';
import { GeniusModalComponent } from './components/modal/genius-modal/genius-modal.component';
import { SquareListComponent } from './components/square-list/square-list.component';
import { WhosOnFirstListComponent } from './components/whos-on-first-list/whos-on-first-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ModuleCardComponent,
    ButtonComponent,
    WireComponent,
    KeypadsComponent,
    GeniusComponent,
    WhosOnFirstComponent,
    MemoryComponent,
    MorseCodeComponent,
    ComplicatedWireComponent,
    WireSequenceComponent,
    MazeComponent,
    PasswordComponent,
    ButtonModalComponent,
    MessageModalComponent,
    CableSolverComponent,
    KeypadImageComponent,
    KeypadModalComponent,
    GeniusTableComponent,
    GeniusModalComponent,
    SquareListComponent,
    WhosOnFirstListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    HttpClientModule,
    MatToolbarModule,
    NgOptimizedImage,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatChipsModule,
    MatListModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
