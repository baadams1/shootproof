import { Component, OnInit } from "@angular/core";
import testdata from "../../assets/testdata.json";

@Component({
  selector: "app-tree-comp",
  templateUrl: "./tree-comp.component.html",
  styleUrls: ["./tree-comp.component.css"]
})
export class TreeCompComponent implements OnInit {
  Nodes: any = testdata;
  isCollapsed: boolean = true;

  public relationshipMap = [];

  constructor() {}
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
    for (let parent of this.Nodes.filter(el => {
      return el.parent == null;
    })) {
      parent.children = [];
      for (let child of this.Nodes.filter(el => {
        return el.parent != null;
      })) {
        if (child.parent == parent.id) {
          parent.children.push(child);
        }
      }
      this.relationshipMap.push(parent);
    }
    console.log(this.relationshipMap);
  }
}
