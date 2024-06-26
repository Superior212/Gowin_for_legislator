import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

export default function Chat() {
  return (
    <div className="grid min-h-screen w-full grid-cols-[340px_1fr]">
      <div className="flex flex-col border-r bg-muted/40">
        <div className="flex h-[60px] items-center px-6">
          <Link
            to="#"
            className="flex items-center gap-2 font-semibold"
            prefetch={false}>
            <MessageCircleIcon className="h-6 w-6" />
            <span>Chat</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto">
          <nav className="grid gap-1 px-4 py-2 text-sm font-medium">
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
              prefetch={false}>
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="flex-1 truncate">
                <div className="font-medium">Acme Inc</div>
                <div className="text-muted-foreground">Hey there!</div>
              </div>
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </Badge>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
              prefetch={false}>
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 truncate">
                <div className="font-medium">John Doe</div>
                <div className="text-muted-foreground">
                  How apos;s it going?
                </div>
              </div>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
              prefetch={false}>
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              <div className="flex-1 truncate">
                <div className="font-medium">Sarah Anderson</div>
                <div className="text-muted-foreground">
                  Did you see the new design?
                </div>
              </div>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
              prefetch={false}>
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div className="flex-1 truncate">
                <div className="font-medium">Michael Johnson</div>
                <div className="text-muted-foreground">
                  I have a question about the project.
                </div>
              </div>
            </Link>
          </nav>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-[60px] items-center border-b bg-muted/40 px-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-8 w-8 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">John Doe</div>
              <div className="text-muted-foreground text-sm">Online</div>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <PhoneIcon className="h-5 w-5" />
              <span className="sr-only">Call</span>
            </Button>
            <Button variant="ghost" size="icon">
              <VideoIcon className="h-5 w-5" />
              <span className="sr-only">Video call</span>
            </Button>
            <Button variant="ghost" size="icon">
              <MoveHorizontalIcon className="h-5 w-5" />
              <span className="sr-only">More</span>
            </Button>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-6">
          <div className="grid gap-4">
            <div className="flex items-start gap-4">
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="grid gap-1.5 rounded-lg bg-muted p-3 text-sm">
                <div>Hey, how apos; s it going?</div>
                <div className="text-xs text-muted-foreground">2:34 PM</div>
              </div>
            </div>
            <div className="flex items-start gap-4 justify-end">
              <div className="grid gap-1.5 rounded-lg bg-primary p-3 text-sm text-primary-foreground">
                <div>I apos; m doing great, thanks for asking!</div>
                <div className="text-xs text-muted-foreground/80">2:35 PM</div>
              </div>
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-start gap-4">
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="grid gap-1.5 rounded-lg bg-muted p-3 text-sm">
                <div>
                  That apos;s great to hear! I wanted to ask you about the
                  project we apos; re working on. Do you have a few minutes to
                  discuss it?
                </div>
                <div className="text-xs text-muted-foreground">2:36 PM</div>
              </div>
            </div>
            <div className="flex items-start gap-4 justify-end">
              <div className="grid gap-1.5 rounded-lg bg-primary p-3 text-sm text-primary-foreground">
                <div>Sure, let me know what you need.</div>
                <div className="text-xs text-muted-foreground/80">2:37 PM</div>
              </div>
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="border-t bg-muted/40 p-4">
          <div className="relative">
            <Textarea
              placeholder="Type your message..."
              className="min-h-[48px] w-full rounded-2xl resize-none p-4 pr-16"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-3 top-3">
              <SendIcon className="h-5 w-5" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function MoveHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}
