import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ButtonComponent } from './pages/button/button.component';
import { WireComponent } from './pages/wire/wire.component';
import { KeypadsComponent } from './pages/keypads/keypads.component';
import { SimonSaysComponent } from './pages/simon-says/simon-says.component';
import { WhosOnFirstComponent } from './pages/whos-on-first/whos-on-first.component';
import { MemoryComponent } from './pages/memory/memory.component';
import { MorseCodeComponent } from './pages/morse-code/morse-code.component';
import { ComplicatedWireComponent } from './pages/complicated-wire/complicated-wire.component';
import { WireSequenceComponent } from './pages/wire-sequence/wire-sequence.component';
import { MazeComponent } from './pages/maze/maze.component';
import { PasswordComponent } from './pages/password/password.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'wire', component: WireComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'keypads', component: KeypadsComponent },
  { path: 'simon_says', component: SimonSaysComponent },
  { path: 'whos_on_first', component: WhosOnFirstComponent },
  { path: 'memory', component: MemoryComponent },
  { path: 'morse_code', component: MorseCodeComponent },
  { path: 'complicated_wire', component: ComplicatedWireComponent },
  { path: 'wire_sequence', component: WireSequenceComponent },
  { path: 'maze', component: MazeComponent },
  { path: 'password', component: PasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
