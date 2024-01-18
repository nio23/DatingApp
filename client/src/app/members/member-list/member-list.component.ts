import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../_services/members.service';
import { Member } from '../../_models/member';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from "../member-card/member-card.component";
import { Observable } from 'rxjs';

@Component({
    selector: 'app-member-list',
    standalone: true,
    templateUrl: './member-list.component.html',
    styleUrl: './member-list.component.css',
    imports: [CommonModule, MemberCardComponent]
})
export class MemberListComponent implements OnInit{
  members$: Observable<Member[]> | undefined;

  constructor(private memberService: MembersService) {  }

  ngOnInit(): void {
    this.members$ = this.memberService.getMembers();
  }

}
