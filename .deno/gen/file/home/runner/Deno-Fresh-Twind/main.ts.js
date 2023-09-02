/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />
import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import { config, setup } from "@twind";
import { virtualSheet } from "twind/sheets";
const sheet = virtualSheet();
sheet.reset();
setup({
    ...config,
    sheet
});
function render(ctx, render) {
    const snapshot = ctx.state.get("twind");
    sheet.reset(snapshot || undefined);
    render();
    ctx.styles.splice(0, ctx.styles.length, ...sheet.target);
    const newSnapshot = sheet.reset();
    ctx.state.set("twind", newSnapshot);
}
await start(manifest, {
    render
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvRGVuby1GcmVzaC1Ud2luZC9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIG5vLWRlZmF1bHQtbGliPVwidHJ1ZVwiIC8+XG4vLy8gPHJlZmVyZW5jZSBsaWI9XCJkb21cIiAvPlxuLy8vIDxyZWZlcmVuY2UgbGliPVwiZG9tLmFzeW5jaXRlcmFibGVcIiAvPlxuLy8vIDxyZWZlcmVuY2UgbGliPVwiZGVuby5uc1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBsaWI9XCJkZW5vLnVuc3RhYmxlXCIgLz5cblxuaW1wb3J0IHsgSW5uZXJSZW5kZXJGdW5jdGlvbiwgUmVuZGVyQ29udGV4dCwgc3RhcnQgfSBmcm9tIFwiJGZyZXNoL3NlcnZlci50c1wiO1xuaW1wb3J0IG1hbmlmZXN0IGZyb20gXCIuL2ZyZXNoLmdlbi50c1wiO1xuXG5pbXBvcnQgeyBjb25maWcsIHNldHVwIH0gZnJvbSBcIkB0d2luZFwiO1xuaW1wb3J0IHsgdmlydHVhbFNoZWV0IH0gZnJvbSBcInR3aW5kL3NoZWV0c1wiO1xuXG5jb25zdCBzaGVldCA9IHZpcnR1YWxTaGVldCgpO1xuc2hlZXQucmVzZXQoKTtcbnNldHVwKHsgLi4uY29uZmlnLCBzaGVldCB9KTtcblxuZnVuY3Rpb24gcmVuZGVyKGN0eDogUmVuZGVyQ29udGV4dCwgcmVuZGVyOiBJbm5lclJlbmRlckZ1bmN0aW9uKSB7XG4gIGNvbnN0IHNuYXBzaG90ID0gY3R4LnN0YXRlLmdldChcInR3aW5kXCIpIGFzIHVua25vd25bXSB8IG51bGw7XG4gIHNoZWV0LnJlc2V0KHNuYXBzaG90IHx8IHVuZGVmaW5lZCk7XG4gIHJlbmRlcigpO1xuICBjdHguc3R5bGVzLnNwbGljZSgwLCBjdHguc3R5bGVzLmxlbmd0aCwgLi4uKHNoZWV0KS50YXJnZXQpO1xuICBjb25zdCBuZXdTbmFwc2hvdCA9IHNoZWV0LnJlc2V0KCk7XG4gIGN0eC5zdGF0ZS5zZXQoXCJ0d2luZFwiLCBuZXdTbmFwc2hvdCk7XG59XG5cbmF3YWl0IHN0YXJ0KG1hbmlmZXN0LCB7IHJlbmRlciB9KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7QUFDdkMsMkJBQTJCO0FBQzNCLHlDQUF5QztBQUN6QywrQkFBK0I7QUFDL0IscUNBQXFDO0FBRXJDLFNBQTZDLEtBQUssUUFBUSxrQkFBa0IsQ0FBQztBQUM3RSxPQUFPLFFBQVEsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0QyxTQUFTLE1BQU0sRUFBRSxLQUFLLFFBQVEsUUFBUSxDQUFDO0FBQ3ZDLFNBQVMsWUFBWSxRQUFRLGNBQWMsQ0FBQztBQUU1QyxNQUFNLEtBQUssR0FBRyxZQUFZLEVBQUUsQUFBQztBQUM3QixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDZCxLQUFLLENBQUM7SUFBRSxHQUFHLE1BQU07SUFBRSxLQUFLO0NBQUUsQ0FBQyxDQUFDO0FBRTVCLFNBQVMsTUFBTSxDQUFDLEdBQWtCLEVBQUUsTUFBMkIsRUFBRTtJQUMvRCxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQUFBb0IsQUFBQztJQUM1RCxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsQ0FBQztJQUNuQyxNQUFNLEVBQUUsQ0FBQztJQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxBQUFDLEtBQUssQ0FBRSxNQUFNLENBQUMsQ0FBQztJQUMzRCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLEFBQUM7SUFDbEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0NBQ3JDO0FBRUQsTUFBTSxLQUFLLENBQUMsUUFBUSxFQUFFO0lBQUUsTUFBTTtDQUFFLENBQUMsQ0FBQyJ9