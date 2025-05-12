
import { useState, useEffect } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckIcon, CopyIcon } from "lucide-react";

interface EmbedDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EmbedDialog({ open, onOpenChange }: EmbedDialogProps) {
  const [copied, setCopied] = useState(false);
  const [embedUrl, setEmbedUrl] = useState("");
  
  useEffect(() => {
    // Generate the embed URL using the current URL
    const currentUrl = window.location.href;
    setEmbedUrl(currentUrl);
    
    // Reset copied state when dialog opens
    if (open) {
      setCopied(false);
    }
  }, [open]);
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(embedUrl);
      setCopied(true);
      
      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  
  const notionEmbedCode = `<iframe src="${embedUrl}" width="100%" height="600" frameborder="0"></iframe>`;
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Embed in Notion</DialogTitle>
          <DialogDescription>
            Copy this embed code to use in Notion or other platforms that support iframe embeds.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Input
                readOnly
                value={notionEmbedCode}
                className="font-mono text-sm"
              />
            </div>
            <Button size="sm" onClick={handleCopy} className="px-3">
              {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
              <span className="sr-only">Copy</span>
            </Button>
          </div>
          
          <div className="rounded-md bg-gray-50 p-4">
            <h3 className="mb-2 font-medium">How to embed in Notion:</h3>
            <ol className="list-decimal pl-4 text-sm text-gray-600 space-y-2">
              <li>Copy the embed code above</li>
              <li>In Notion, type <code className="bg-gray-100 px-1 rounded">/embed</code></li>
              <li>Select "Embed" from the menu</li>
              <li>Paste the copied code</li>
              <li>Click "Embed link"</li>
            </ol>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
